import time

start = time.time()
sum([i*i for i in range(10_000)])
print('Time:-', time.time()- start)