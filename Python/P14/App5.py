import schedule
def task():
    print('1 Minute Passed')

schedule.every(1).minutes.do(task)