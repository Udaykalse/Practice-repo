def validate_UserName(*chars):
    for ch in chars:
        if ch ==" ":
            print('Invalid UserName')
            return
    print('Valid UserName')

validate_UserName(*"Basu")