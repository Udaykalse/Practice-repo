import json
import os
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)
DATA_FILE = "users.json"


def load_users():
  if not os.path.exists(DATA_FILE):
    return []
  with open(DATA_FILE, "r") as f:
    try:
      return json.load(f)
    except json.JSONDecodeError:
      return []


def save_users(users):
  with open(DATA_FILE, "w") as f:
    json.dump(users, f, indent=4)


@app.route("/")
def home():
  return render_template("index.html")


@app.route("/api/signup", methods=["POST"])
def signup():
  data = request.json
  username = data.get("username", "").strip()
  password = data.get("password", "").strip()

  if not username or not password:
    return jsonify({"success": False, "message": "All fields are required."}), 400

  users = load_users()

  # Check if user already exists
  if any(u["username"] == username for u in users):
    return (
        jsonify({"success": False, "message": "Username already exists."}),
        400,
    )

  # Save new user
  users.append({"username": username, "password": password})
  save_users(users)

  return jsonify({"success": True, "message": "Signup successful!"})


@app.route("/api/login", methods=["POST"])
def login():
  data = request.json
  username = data.get("username", "").strip()
  password = data.get("password", "").strip()

  users = load_users()

  # Validate credentials
  user = next(
      (
          u
          for u in users
          if u["username"] == username and u["password"] == password
      ),
      None,
  )

  if user:
    return jsonify({"success": True, "message": f"Welcome back, {username}!"})
  else:
    return (
        jsonify(
            {"success": False, "message": "Invalid username or password."}
        ),
        401,
    )


if __name__ == "__main__":
  app.run(debug=True, port=5000)