from functools import lru_cache

@lru_cache
def f(x): return x*x

print(f(4)); print(f(4))