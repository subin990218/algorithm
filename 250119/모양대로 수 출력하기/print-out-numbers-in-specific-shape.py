n = int(input())

for i in range(n):
    for j in range(i):
        print(" ", end=" ")
    for x in range(n-i):
        print(n-x, end=" ")
    print()