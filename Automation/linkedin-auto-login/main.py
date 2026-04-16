from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from dotenv import load_dotenv
import os
import time
import traceback

load_dotenv()

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("PASSWORD")
LINKEDIN_URL = "https://www.linkedin.com/login"

def get_incognito_driver():
    options = Options()
    options.add_argument("--incognito")
    options.add_argument("--start-maximized")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--remote-debugging-port=9222")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options
    )
    return driver

def login_linkedin(driver):
    driver.get(LINKEDIN_URL)

    wait = WebDriverWait(driver, 15)

    email_field = wait.until(
        EC.presence_of_element_located((By.ID, "username"))
    )
    email_field.clear()
    email_field.send_keys(EMAIL)

    password_field = wait.until(
        EC.presence_of_element_located((By.ID, "password"))
    )
    password_field.clear()
    password_field.send_keys(PASSWORD)

    login_button = wait.until(
        EC.element_to_be_clickable((By.XPATH, '//button[@type="submit"]'))
    )
    login_button.click()

    time.sleep(5)

    if "feed" in driver.current_url:
        print("Login successful!")
    else:
        print("Login failed or captcha appeared.")

def main():
    driver = get_incognito_driver()
    try:
        login_linkedin(driver)
        time.sleep(5)
    except Exception:
        traceback.print_exc()
    finally:
        driver.quit()

if __name__ == "__main__":
    main()