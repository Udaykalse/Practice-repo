def anagram(str1,str2):
    return sorted(str1.lower())==sorted(str2.lower())

print(anagram('listen','silent'))