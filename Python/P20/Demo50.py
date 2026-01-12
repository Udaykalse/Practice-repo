def count_vowels(text):
    return len([ch for ch in text.lower() if ch in 'aeiou'])

print(count_vowels('Sanmathi'))