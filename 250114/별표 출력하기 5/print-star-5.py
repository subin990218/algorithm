n = int(input())

for a in range(n):
    for b in range(n-a):
        for c in range(n-a):
            print("*", end="")
        print(" ", end="")
    print()