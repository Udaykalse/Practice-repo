# LinkedIn Auto Login Bot

A Python automation project that uses Selenium to log in to LinkedIn securely using environment variables.

---

## 🚀 Features

- Automated login to LinkedIn
- Uses Chrome in incognito mode
- Secure credential handling with `.env`
- Explicit waits for stable element handling
- Clean and modular code structure

---

## 🛠️ Tech Stack

- Python
- Selenium
- WebDriver Manager
- ChromeDriver
- python-dotenv

---

## 📂 Project Structure

```
linkedin-auto-login/
├── main.py
├── requirements.txt
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```
git clone https://github.com/your-username/linkedin-auto-login.git
cd linkedin-auto-login
```

### 2. Create Virtual Environment (Optional)
```
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```
pip install -r requirements.txt
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
EMAIL=your_email@gmail.com
PASSWORD=your_password_here
```

---

## ▶️ Run the Script

```
python3 main.py
```

---

## 🧠 How It Works

1. Launches Chrome in incognito mode  
2. Navigates to LinkedIn login page  
3. Enters credentials from `.env`  
4. Clicks login button  
5. Verifies login success  

---

## ⚠️ Important Notes

- Do not commit `.env` file to version control  
- LinkedIn may show CAPTCHA for automated logins  
- This project is for learning and educational purposes only  

---

## 📌 Future Improvements

- Add Docker support  
- Add logging system  
- Implement CI/CD pipeline  
- Extend automation features  

---

## 📄 License

This project is for educational purposes only.