tasks=[]

def show_menu():
    print("\n------- TODO LIST Menu -------")
    print("1. Add Task ")
    print("2. View Tasks")
    print("3. Mark Task as Complete")
    print("4. Delete Task")
    print("5. Exit")

def add_task():
    task=input('Entre Task :- ')
    tasks.append({"task":task,"done":False})
    print('Task added Successfully')


def view_tasks():
    if not tasks:
        print('No task available')
        return
    for i , t in enumerate(tasks,start=1):
        status='✔' if t['done'] else '❌'
        print(f"{i}. {t['task']} [{status}]")
    
def complete_task():
    view_tasks()
    try:
        num=int(input("Entre task Number to mark complete :- "))
        tasks[num-1]['done']=True
        print('Task marked as Complete ')
    except:
        print('Invalid Input!')
def delete_task():
    view_tasks()
    try:
        num=int(input('Entre task number to mark completed: '))
        tasks[num-1]['done']=True
        print("Task Marked As Completed")
    except:
        print('Invalid Input')
while True:
    show_menu()
    choice=input("Choose an Option :- ")

    if choice=='1':
        add_task()
    elif choice=='2':
        view_tasks()
    elif choice=='3':
        complete_task()
    elif choice=='4':
        delete_task()
    elif choice=='5':
        print('Good Bye')
        break
    else:
        print('Invalid End')




