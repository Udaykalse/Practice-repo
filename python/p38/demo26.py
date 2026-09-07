job1 = {"Javascript", "SQL", "Git", "FastAPI"}
job2 = {"Python", "React", "Git", "Docker"}

print("Job 1:- ",job1)
print("Job 2:- ",job2)
print("===================================")
print(job1.union(job2))
print(job1.intersection(job2))
print(job1.difference(job2))
print(job2.difference(job1))


