def first_Rep(s):
    seen = set()
    for ch in s:
        if ch in seen:
            return ch
        seen.add(ch)
    return None


print(first_Rep('abca'))