n = int(input())

start = 11
for i in range(n):
    tmp = start
    for j in range(n):
        print(tmp, end=" ")
        tmp += 2
    print()
    start += 2


