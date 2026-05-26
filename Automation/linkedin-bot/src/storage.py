import json
import os
from datetime import datetime
from src.utils import setup_logger

logger = setup_logger()
DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'connections.json')

def load_connections():
    with open(DATA_PATH, 'r') as f:
        return json.load(f)

def save_connection(name, title, company, profile_url, target_role):
    data = load_connections()
    entry = {
        "name": name,
        "title": title,
        "company": company,
        "profile_url": profile_url,
        "target_role": target_role,
        "sent_at": datetime.now().strftime('%Y-%m-%dT%H:%M:%S'),
        "status": "sent"
    }
    data["connections"].append(entry)
    with open(DATA_PATH, 'w') as f:
        json.dump(data, f, indent=2)
    logger.info(f"Saved: {name} | {title} | {company}")

def already_sent(profile_url):
    data = load_connections()
    sent_urls = {c["profile_url"] for c in data["connections"]}
    return profile_url in sent_urls

def count_today():
    data = load_connections()
    today = datetime.now().strftime('%Y-%m-%d')
    return sum(1 for c in data["connections"] if c["sent_at"].startswith(today))
