import time
import random
import logging
import os

LOG_PATH = os.path.join(os.path.dirname(__file__), '..', 'logs', 'run.log')

def setup_logger():
    logger = logging.getLogger('linkedin_bot')
    logger.setLevel(logging.INFO)
    if logger.handlers:
        return logger
    fmt = logging.Formatter('%(asctime)s [%(levelname)s] %(message)s', datefmt='%Y-%m-%d %H:%M:%S')
    fh = logging.FileHandler(LOG_PATH)
    fh.setFormatter(fmt)
    ch = logging.StreamHandler()
    ch.setFormatter(fmt)
    logger.addHandler(fh)
    logger.addHandler(ch)
    return logger

def human_delay(min_sec=3, max_sec=8):
    t = random.uniform(min_sec, max_sec)
    time.sleep(t)

def short_delay():
    time.sleep(random.uniform(0.8, 2.0))