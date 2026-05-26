from src.utils import setup_logger, human_delay, short_delay

logger = setup_logger()

def go_to_search(page, role, location):
    """Navigate to LinkedIn people search for a role + location."""
    query = f"{role} {location}"
    url = (f"https://www.linkedin.com/search/results/people/"
           f"?keywords={query.replace(' ', '%20')}"
           f"&origin=GLOBAL_SEARCH_HEADER")
    logger.info(f"Searching: {query}")
    page.goto(url, timeout=20000, wait_until="domcontentloaded")
    human_delay(3, 5)

    # Scroll to load all result cards
    for _ in range(3):
        page.keyboard.press("End")
        short_delay()
    page.keyboard.press("Home")
    short_delay()

    count = page.evaluate("""() =>
        document.querySelectorAll('li.reusable-search__result-container').length
    """)
    logger.info(f"Loaded {count} result cards for: {role}")
    return count
