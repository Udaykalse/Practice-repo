jobs = ["Google", "Microsoft", "Amazon"]

jobs.append("TCS")            
jobs.insert(1, "Infosys")     
jobs.remove("Amazon")        

print("Jobs list:", jobs)
print("First job:", jobs[0])
print("Last job:", jobs[-1])
print("Total jobs:", len(jobs))

jobs.sort()
print("Sorted jobs:", jobs)