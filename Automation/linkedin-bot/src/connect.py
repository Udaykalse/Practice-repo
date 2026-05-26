
from src.utils import setup_logger, human_delay, short_delay
from src.storage import save_connection, already_sent

logger = setup_logger()

def send_connections_from_search(page, target_role, max_to_send):
    """
    Click Connect buttons directly from the search results page.
    Returns count of connections sent.
    """
    sent = 0

    # Extract all result cards with their info + connect buttons
    results = page.evaluate("""() => {
        const cards = Array.from(document.querySelectorAll('li.reusable-search__result-container'));
        return cards.map(card => {
            // Name
            const nameEl = card.querySelector('span[aria-hidden="true"]');
            const name = nameEl ? nameEl.innerText.trim() : 'Unknown';

            // Title
            const titleEl = card.querySelector('.entity-result__primary-subtitle');
            const title = titleEl ? titleEl.innerText.trim() : 'Unknown';

            // Company/location
            const companyEl = card.querySelector('.entity-result__secondary-subtitle');
            const company = companyEl ? companyEl.innerText.trim() : 'Unknown';

            // Profile URL
            const linkEl = card.querySelector('a[href*="/in/"]');
            const url = linkEl ? linkEl.href.split('?')[0] : null;

            // Has Connect button?
            const buttons = Array.from(card.querySelectorAll('button'));
            const hasConnect = buttons.some(b => {
                const txt = b.innerText.replace(/\\s+/g, ' ').trim();
                return txt === 'Connect' || txt === '+ Connect';
            });

            return { name, title, company, url, hasConnect };
        });
    }""")

    logger.info(f"Found {len(results)} cards, checking for Connect buttons...")

    for i, person in enumerate(results):
        if sent >= max_to_send:
            break

        url = person.get('url')
        if not url or '/in/' not in url:
            continue

        if already_sent(url):
            logger.info(f"Already sent to {person['name']}, skipping.")
            continue

        if not person.get('hasConnect'):
            logger.info(f"No Connect on card for {person['name']} — already connected/pending.")
            continue

        logger.info(f"Connecting to: {person['name']} | {person['title']} | {person['company']}")

        # Click the Connect button on this specific card using index
        clicked = page.evaluate("""(cardIndex) => {
            const cards = Array.from(document.querySelectorAll('li.reusable-search__result-container'));
            const card = cards[cardIndex];
            if (!card) return false;
            const buttons = Array.from(card.querySelectorAll('button'));
            const connectBtn = buttons.find(b => {
                const txt = b.innerText.replace(/\\s+/g, ' ').trim();
                return txt === 'Connect' || txt === '+ Connect';
            });
            if (connectBtn) { connectBtn.click(); return true; }
            return false;
        }""", i)

        if not clicked:
            logger.warning(f"Could not click Connect for {person['name']}")
            continue

        human_delay(1.5, 2.5)

        # Handle "Send without a note" modal
        modal_handled = page.evaluate("""() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const sendBtn = buttons.find(b => {
                const txt = b.innerText.replace(/\\s+/g, ' ').trim();
                const label = b.getAttribute('aria-label') || '';
                return txt === 'Send without a note'
                    || txt === 'Send now'
                    || label === 'Send without a note'
                    || label === 'Send now';
            });
            if (sendBtn) { sendBtn.click(); return true; }
            return false;
        }""")

        human_delay(2, 3)

        if modal_handled:
            logger.info(f"✅ Sent (modal handled): {person['name']}")
        else:
            logger.info(f"✅ Sent (no modal): {person['name']}")

        save_connection(
            person['name'], person['title'],
            person['company'], url, target_role
        )
        sent += 1
        human_delay(3, 6)

    return sent