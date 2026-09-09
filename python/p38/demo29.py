

job = {
    "company": "Google",
    "role": "Software Engineer",
    "status": "Applied",
    "location": "Bangalore"
}

print(job)

print(job["company"])
print(job['role'])
job["status"]="Interview"
print(job)
job["salary"]=4000
job["job_url"]="https://chatgp1t.com/c/6a96e990-3634-83e8-806d-7ebc1490f65e"
print(job)


if "email" in job:
    print("Exists")
else:
   print("Not exists") 


print(job)