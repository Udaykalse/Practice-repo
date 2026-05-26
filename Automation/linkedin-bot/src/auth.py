import os
import json
from dotenv import load_dotenv
from src.utils import setup_logger, human_delay

load_dotenv()
logger = setup_logger()

EMAIL    = os.getenv("LINKEDIN_EMAIL")
PASSWORD = os.getenv("LINKEDIN_PASSWORD")

COOKIES_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'cookies.json')

def save_cookies(context):
    cookies = context.cookies()
    with open(COOKIES_PATH, 'w') as f:
        json.dump(cookies, f, indent=2)
    logger.info("Session cookies saved.")

def load_cookies(context):
    if not os.path.exists(COOKIES_PATH):
        return False
    with open(COOKIES_PATH, 'r') as f:
        cookies = json.load(f)
    if not cookies:
        return False
    context.add_cookies(cookies)
    logger.info("Session cookies loaded.")
    return True

def is_logged_in(page):
    try:
        page.goto("https://www.linkedin.com/feed/", timeout=30000, wait_until="domcontentloaded")
        human_delay(2, 4)
        return "feed" in page.url
    except Exception:
        return False

def login(page, context):
    logger.info("Attempting LinkedIn login...")
    try:
        page.goto("https://www.linkedin.com/login", timeout=60000, wait_until="domcontentloaded")
        human_delay(2, 4)

        # Wait explicitly for the username field
        page.wait_for_selector("#username", timeout=70000)
        logger.info("Login page loaded.")

        page.fill("#username", EMAIL)
        human_delay(0.5, 1.5)
        page.fill("#password", PASSWORD)
        human_delay(0.5, 1.5)
        page.click("button[type='submit']")
        human_delay(5, 8)

        current_url = page.url
        logger.info(f"After login URL: {current_url}")

        if "feed" in current_url or "checkpoint" in current_url:
            logger.info("Login successful.")
            save_cookies(context)
            return True
        else:
            logger.error(f"Login failed. URL: {current_url}")
            return False

    except Exception as e:
        logger.error(f"Login error: {e}")
        return False

def ensure_logged_in(page, context):
    loaded = load_cookies(context)
    if loaded and is_logged_in(page):
        logger.info("Already logged in via cookies.")
        return True
    return login(page, context)