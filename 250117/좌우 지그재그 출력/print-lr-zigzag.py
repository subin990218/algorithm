n = int(input())
cnt = 1
for i in range(n):
    for j in range(n):
        if i % 2 == 0:
            if i != 0 and j == 0:
                cnt += n
            elif j != 0:
                cnt += 1
        else:
            if j == 0:
                cnt += n
            else:
                cnt -= 1
        print(cnt, end=" ")
    print()