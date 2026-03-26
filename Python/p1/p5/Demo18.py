def vowels(s):
    return sum (1 for ch in s if ch in 'aeiouAEIOU')


print(vowels("Udaysinh Kalse"))