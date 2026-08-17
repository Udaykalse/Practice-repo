# Dockerized Static Website

A beginner-level static website built using **HTML, CSS, JavaScript, Nginx, Linux, and Docker**.

The website runs inside an **Nginx Docker container** and is accessible from the host machine through Docker port mapping.

## 🚀 Technologies Used

* HTML5
* CSS3
* JavaScript
* Nginx
* Linux
* Docker
* Dockerfile

## 📁 Project Structure

```text
docker-static-website/
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── .dockerignore
├── README.md
└── screenshots/
    ├── home.png
    └── button-click.png
```

## 🐳 How Docker Works in This Project

The application follows this flow:

```text
HTML + CSS + JavaScript
          ↓
       Dockerfile
          ↓
      Docker Image
          ↓
     Docker Container
          ↓
         Nginx
          ↓
     localhost:8080
```

### Dockerfile

The `Dockerfile` contains the instructions used to build the Docker image.

```dockerfile
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80
```

### Explanation

#### `FROM nginx:alpine`

Uses the lightweight Alpine-based Nginx image as the base image.

#### `COPY`

Copies the website files into Nginx's default web directory:

```text
/usr/share/nginx/html/
```

#### `EXPOSE 80`

Documents that Nginx listens on port `80` inside the container.

> Note: `EXPOSE` does not publish the port to the host. Port publishing happens when the container is started with `-p`.

---

## 📸 Screenshots

**Home page** — the static site as served by Nginx on first load, showing the base layout and styling.

![Website Home](./screenshots/home.png)

**Button click** — the page after a button is clicked, showing the JavaScript-driven interaction/state change.

![Button Click](./screenshots/button-click.png)

> To make these render on GitHub, add `home.png` and `button-click.png` to a `screenshots/` folder in your repo root — they aren't included in this file itself.

---

# ⚙️ Requirements

Make sure you have:

* Linux
* Docker
* A web browser

Check your Docker installation:

```bash
docker --version
```

Example output:

```text
Docker version 28.1.1
```

---

# 🛠️ Run the Project

## 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/docker-static-website.git
```

Move into the project folder:

```bash
cd docker-static-website
```

## 2. Build the Docker Image

```bash
docker build -t docker-static-website .
```

### What happens?

Docker reads the `Dockerfile` and builds an image containing:

* Nginx
* HTML
* CSS
* JavaScript

Check that the image was created:

```bash
docker images
```

You should see `docker-static-website` in the list.

---

# ▶️ Run the Container

Start the container:

```bash
docker run -d --name docker-static-website-container -p 8080:80 docker-static-website
```

### Port Mapping

The command includes:

```text
-p 8080:80
```

This means:

```text
Host machine          Docker container
localhost:8080   →    port 80
                         ↓
                       Nginx
```

Open the website in your browser:

```text
http://localhost:8080
```

---

# 🔍 Check Running Containers

```bash
docker ps
```

You should see something similar to:

```text
CONTAINER ID   IMAGE                   STATUS      PORTS
xxxxxx         docker-static-website   Up          0.0.0.0:8080->80/tcp
```

---

# 📋 View Container Logs

View the Nginx/container logs:

```bash
docker logs docker-static-website-container
```

Follow logs in real time:

```bash
docker logs -f docker-static-website-container
```

Press `Ctrl + C` to stop following the logs.

---

# 🛑 Stop the Container

```bash
docker stop docker-static-website-container
```

Check stopped containers:

```bash
docker ps -a
```

---

# ▶️ Start an Existing Container

After stopping the container, you don't need to create a new one — just start it again:

```bash
docker start docker-static-website-container
```

Confirm it's running:

```bash
docker ps
```

Then open:

```text
http://localhost:8080
```

---

# 🗑️ Remove the Container

Stop it first:

```bash
docker stop docker-static-website-container
```

Then remove it:

```bash
docker rm docker-static-website-container
```

---

# 🗑️ Remove the Docker Image

After removing the container:

```bash
docker rmi docker-static-website
```

Check remaining images:

```bash
docker images
```

---

# 🧪 Troubleshooting

## Website does not open

Check whether the container is running:

```bash
docker ps
```

If it isn't running, check all containers (including stopped ones):

```bash
docker ps -a
```

Then check the logs:

```bash
docker logs docker-static-website-container
```

---

## Port 8080 is already in use

You may see an error saying port `8080` is already allocated. Use a different host port instead:

```bash
docker run -d --name docker-static-website-container -p 8081:80 docker-static-website
```

Then open:

```text
http://localhost:8081
```

The container still uses port `80` internally — only the host-side port changed:

```text
8081 → 80
```

---

## Container immediately stops

Check its status:

```bash
docker ps -a
```

Then view the logs to see why it stopped:

```bash
docker logs docker-static-website-container
```

---

## Website changes are not appearing

If you edit `index.html`, `style.css`, or `script.js`, the existing Docker image still contains the old files. Rebuild it:

```bash
docker build -t docker-static-website .
```

Then recreate the container:

```bash
docker stop docker-static-website-container
docker rm docker-static-website-container
docker run -d --name docker-static-website-container -p 8080:80 docker-static-website
```

---

# 🧠 Important Docker Concepts Learned

## Dockerfile

A text file containing instructions for building a Docker image.

## Docker Image

A packaged, read-only template used to create containers (e.g. `docker-static-website:latest`).

## Docker Container

A running instance of a Docker image (e.g. `docker-static-website-container`).

## Port Mapping

Connects a host machine port to a container port:

```text
-p 8080:80
```

means **Host port 8080 → Container port 80**.

## Nginx

Nginx acts as the web server inside the container, serving the static HTML/CSS/JS files.

---

# 📌 Useful Docker Commands Reference

| Command | Purpose |
|---|---|
| `docker --version` | Check Docker version |
| `docker images` | List images |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker build -t docker-static-website .` | Build image |
| `docker run -d --name docker-static-website-container -p 8080:80 docker-static-website` | Run container |
| `docker stop docker-static-website-container` | Stop container |
| `docker start docker-static-website-container` | Start container |
| `docker logs docker-static-website-container` | View logs |
| `docker rm docker-static-website-container` | Remove container |
| `docker rmi docker-static-website` | Remove image |

---

# 🐙 Upload to GitHub

Initialize Git:

```bash
git init
```

Check the file status:

```bash
git status
```

Stage the files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Add Dockerized static website"
```

Create a new repository on GitHub named `docker-static-website`, then connect your local project to it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/docker-static-website.git
```

Rename the branch:

```bash
git branch -M main
```

Push the project:

```bash
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

# 🎯 What I Learned From This Project

* How to build a static website using HTML, CSS, and JavaScript
* How Nginx serves static files
* What a Dockerfile is and how to write one
* How to build a Docker image
* How to create and run a Docker container
* Docker port mapping
* How to check running containers
* How to view container logs
* How to stop and restart containers
* Basic Docker troubleshooting
* How to rebuild an image after changing application files
* How to push a Docker project to GitHub

---

# 🚀 Future Improvements

* Add a custom Nginx configuration
* Add a custom 404 page
* Use Docker Compose
* Add Nginx access/error logging
* Add a health check
* Add HTTPS
* Add GitHub Actions CI/CD
* Deploy the Dockerized website to a cloud server

---

## 👨‍💻 Project

**Dockerized Static Website**

Built for learning Docker, Nginx, Linux, and basic deployment concepts.