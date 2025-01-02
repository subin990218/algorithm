n = int(input())
ans = 0
for i in range(1, 101):
    ans += i
    if ans >= n:
        ans -= i
        print(ans)
        break