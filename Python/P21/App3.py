def print_n_pattern(h):
    for i in range(h):
        for j in range(h):
            if j == 0 or j == h - 1 or j == i:
                print("* ",end='')
            else:
                print("  ", end='')
        print()
    
he = 7
print_n_pattern(he)