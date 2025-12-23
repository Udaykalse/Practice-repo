pwd='admin123'
has_digit=False

for ch in pwd:
    if ch >='0' and ch <='9':
        has_digit=True

print("Strong Password" if has_digit else "Weak Password")
