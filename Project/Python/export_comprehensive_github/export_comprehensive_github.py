import json
import time
import requests


def fetch_comprehensive_github_data(username, token=None):
  headers = {"Accept": "application/vnd.github.v3+json"}
  if token:
    headers["Authorization"] = f"Bearer {token}"

  url = f"https://api.github.com/users/{username}/repos?per_page=100&sort=updated"
  print(f"Fetching repositories for user: {username}...")

  response = requests.get(url, headers=headers)

  # Check for rate limiting or user not found errors
  if response.status_code == 403:
    print(
        "\n[ERROR] GitHub API Rate Limit exceeded! You are making unauthenticated"
        " requests (limit 60/hr). Please generate a GitHub Personal Access Token"
        " and paste it into the GITHUB_TOKEN variable."
    )
    return None
  elif response.status_code != 200:
    print(
        f"\n[ERROR] Failed to fetch repos: {response.status_code} -"
        f" {response.json().get('message', 'Unknown error')}"
    )
    return None

  repos = response.json()
  detailed_repos = []
  tech_counts = {}
  readme_count = 0
  total_projects = len(repos)

  print(
      f"Found {total_projects} repositories. Analyzing details (commits, README,"
      " technologies)..."
  )
  print(
      "------------------------------------------------------------------"
  )

  for index, repo in enumerate(repos, 1):
    repo_name = repo.get("name")
    primary_lang = repo.get("language") or "Not Specified"
    print(
        f"[{index}/{total_projects}] Processing repository: '{repo_name}'"
        f" (Lang: {primary_lang})..."
    )

    # Track technology distribution
    tech_counts[primary_lang] = tech_counts.get(primary_lang, 0) + 1

    # Check README existence
    has_readme = False
    try:
      readme_url = (
          f"https://api.github.com/repos/{username}/{repo_name}/readme"
      )
      readme_resp = requests.get(readme_url, headers=headers)
      if readme_resp.status_code == 200:
        has_readme = True
        readme_count += 1
    except Exception:
      pass

    # Get commit count safely
    commit_count = 0
    try:
      commits_url = f"https://api.github.com/repos/{username}/{repo_name}/commits?per_page=1"
      commits_resp = requests.get(commits_url, headers=headers)

      if commits_resp.status_code == 200:
        if "link" in commits_resp.headers:
          link_header = commits_resp.headers["link"]
          # Parse last page number from link header safely
          parts = link_header.split(",")
          for part in parts:
            if 'rel="last"' in part:
              start_idx = part.find("&page=") + 6
              end_idx = part.find(">", start_idx)
              if start_idx > 5 and end_idx != -1:
                commit_count = int(part[start_idx:end_idx])
        else:
          # If no pagination link, count items in the response array
          commit_count = (
              len(commits_resp.json())
              if isinstance(commits_resp.json(), list)
              else 0
          )
    except Exception:
      commit_count = 0

    repo_info = {
        "project_name": repo_name,
        "description": repo.get("description"),
        "primary_language": primary_lang,
        "commit_count": commit_count,
        "has_readme": has_readme,
        "html_url": repo.get("html_url"),
        "created_at": repo.get("created_at"),
        "updated_at": repo.get("updated_at"),
        "is_fork": repo.get("fork"),
    }
    detailed_repos.append(repo_info)

    # Small sleep to respect GitHub API thresholds
    time.sleep(0.3)

  summary_stats = {
      "total_projects": total_projects,
      "total_with_readme": readme_count,
      "total_without_readme": total_projects - readme_count,
      "technology_breakdown": tech_counts,
  }

  return {"summary": summary_stats, "repositories": detailed_repos}


if __name__ == "__main__":
  GITHUB_USERNAME = "Udaykalse"

  # Highly Recommended: If you hit rate limits, paste your GitHub Personal Access Token here.
  # (You can create one for free under GitHub Settings > Developer Settings > Personal Access Tokens)
  GITHUB_TOKEN = None  # Example: "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

  data = fetch_comprehensive_github_data(GITHUB_USERNAME, GITHUB_TOKEN)

  if data:
    filename = f"{GITHUB_USERNAME}_comprehensive_github_analysis.json"
    with open(filename, "w", encoding="utf-8") as f:
      json.dump(data, f, indent=4)
    print("\n" + "=" * 50)
    print(f"Successfully generated '{filename}'!")
    print(f"Total Projects: {data['summary']['total_projects']}")
    print(f"Projects with README: {data['summary']['total_with_readme']}")
    print("Technology Breakdown:")
    for tech, count in data["summary"]["technology_breakdown"].items():
      print(f"  - {tech}: {count} project(s)")
    print("=" * 50)
  else:
    print("\n[FAILED] Could not export GitHub data. See error messages above.")