Just create `README.md` in root and paste everything below:

---

```md
# Node + Nginx + Docker API

A small production-style backend project using **Node.js**, **Nginx reverse proxy**, and **Docker Compose**.

---

## 🚀 Tech Stack

- Node.js (Express)
- Nginx
- Docker
- Docker Compose

---

## 📁 Project Structure
```

node-nginx-docker-api/
│
├── app/
│ └── src/
│ ├── controllers/
│ ├── routes/
│ └── server.js
│
├── nginx/
│ └── nginx.conf
│
├── docker-compose.yml
├── .gitignore
└── README.md

```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```

git clone <your-repo-url>
cd node-nginx-docker-api

```

### 2. Run Project

```

docker compose up --build

```

---

## 🧪 API Endpoint

### Health Check

```

GET /api/health

````

### Response

```json
{
  "status": "OK",
  "service": "node-api"
}
````

Open in browser:

```
http://localhost/api/health
```

---

## 🧱 Architecture

```
Client → Nginx → Node API
```

- Nginx acts as a reverse proxy
- Requests are forwarded to Node container internally

---

## 🐳 Docker Services

| Service  | Port | Description   |
| -------- | ---- | ------------- |
| nginx    | 80   | Reverse proxy |
| node-api | 3000 | Express API   |

---

## ▶️ Useful Commands

Start containers:

```
docker compose up
```

Rebuild containers:

```
docker compose up --build
```

Stop containers:

```
docker compose down
```

Check running containers:

```
docker ps
```

---

## 📚 Learning Goals

- Docker multi-container setup
- Reverse proxy with Nginx
- Node.js API structure
- Container networking
- Backend deployment basics

---

## 👨‍💻 Author

Udaysinh Kalse

```

---

✅ **Now your repo looks professional on GitHub.**

Next recommended upgrade:

👉 add **`.env` configuration system** (real production practice).

Say **“next step”** when ready.
```
