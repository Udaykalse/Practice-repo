python  ={"Python","SQL","Git"}
backend = {"Python","FastAPI","PostgreSQL","Git"}
# result=python.union(backend)
# result = python | backend
result = (python.intersection(backend))
print(result)