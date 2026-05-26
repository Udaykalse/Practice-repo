import json
import os
from playwright.sync_api import sync_playwright
from src.auth import ensure_logged_in
from src.search import go_to_search
from src.connect import send_connections_from_search
from src.storage import count_today
from src.utils import setup_logger, human_delay

logger = setup_logger()
CONFIG_PATH = os.path.join(os.path.dirname(__file__), 'config', 'targets.json')

def load_config():
    with open(CONFIG_PATH, 'r') as f:
        return json.load(f)

def run():
    config   = load_config()
    roles    = config.get("roles", [])
    location = config.get("location", "")
    max_run  = config.get("max_per_run", 20)
    max_day  = config.get("max_per_day", 20)
    headless = config.get("headless", False)

    today_count = count_today()
    if today_count >= max_day:
        logger.warning(f"Daily limit reached ({today_count}/{max_day}). Stopping.")
        return

    remaining = min(max_run, max_day - today_count)
    sent_total = 0
    logger.info(f"Starting run — target: {remaining} | roles: {roles}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=headless, slow_mo=50)
        context = browser.new_context(
            viewport={"width": 1280, "height": 800},
            user_agent=(
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
            )
        )
        page = context.new_page()

        if not ensure_logged_in(page, context):
            logger.error("Login failed. Aborting.")
            browser.close()
            return

        for role in roles:
            if sent_total >= remaining:
                break
            try:
                go_to_search(page, role, location)
                sent = send_connections_from_search(
                    page, role, remaining - sent_total
                )
                sent_total += sent
                logger.info(f"Role '{role}' done — sent {sent}. Total: {sent_total}/{remaining}")
                human_delay(3, 6)
            except Exception as e:
                logger.error(f"Error on role {role}: {e}")
                continue

        logger.info(f"Run complete. Total sent: {sent_total}")
        browser.close()

if __name__ == "__main__":
    run()