a, b = map(int, input().split())

cnt = (b - a) // 2 + 1

for i in range(1, 10):
    tmp = b
    for j in range(cnt):
        print(f"{tmp} * {i} = {tmp*i}", end=" ")
        if j < (cnt - 1):
            print("/", end=" ")
        tmp -= 2
    print()