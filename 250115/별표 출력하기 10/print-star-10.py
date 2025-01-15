n = int(input())
cntOdd = 0
cnt = n
for i in range(1, 2*n + 1):
    if i % 2 != 0:
        cntOdd += 1
        for j in range(cntOdd):
            print("*", end=" ")
        print()
    else:
        for j in range(cnt):
            print("*", end=" ")
        cnt -= 1
        print()