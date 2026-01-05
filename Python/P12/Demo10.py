def is_Valid_Password(pwd):
    return len(pwd)>= 9

def notify_Status(is_Valid):
    msg = 'Access Granted' if is_Valid else 'Access Denied' 
    print(msg)

def attempt_Login(pwd):
    valid = is_Valid_Password(pwd)
    notify_Status(valid)

attempt_Login('Uday12345')
