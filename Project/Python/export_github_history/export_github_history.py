import json
import os
import requests


def fetch_github_data(username):
  """Fetches public repositories and metadata for a given GitHub username."""
  url = f"https://api.github.com/users/{username}/repos?per_page=100&sort=updated"
  print(f"Fetching repositories for user: {username}...")

  response = requests.get(url)

  if response.status_code != 200:
    print(
        f"Error fetching data: {response.status_code} - {response.json().get('message', 'Unknown error')}"
    )
    return []

  repos = response.json()
  extracted_data = []

  for repo in repos:
    repo_info = {
        "project_name": repo.get("name"),
        "description": repo.get("description"),
        "primary_language": repo.get("language"),
        "html_url": repo.get("html_url"),
        "created_at": repo.get("created_at"),
        "updated_at": repo.get("updated_at"),
        "is_fork": repo.get("fork"),
        "stars_count": repo.get("stargazers_count"),
    }
    extracted_data.append(repo_info)

  return extracted_data


if __name__ == "__main__":
  # Replace with your actual GitHub username
  GITHUB_USERNAME = "Udaykalse"

  # Optional: If you hit rate limits, you can add a GitHub Personal Access Token here
  # HEADERS = {"Authorization": "token YOUR_PAT_TOKEN"}

  data = fetch_github_data(GITHUB_USERNAME)

  if data:
    filename = f"{GITHUB_USERNAME}_github_history.json"
    with open(filename, "w", encoding="utf-8") as f:
      json.dump(data, f, indent=4)
    print(
        f"Successfully exported {len(data)} repositories to '{filename}'!"
        " You can now upload this file here."
    )
  else:
    print("No repositories found or failed to retrieve data.")