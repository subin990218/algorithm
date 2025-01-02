n = int(input())
ans = n

while ans > 1:
    for i in range(1, n):
        if ans // i > 1:
            ans = ans // i
        else:
            print(i)