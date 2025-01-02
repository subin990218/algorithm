a, b = map(int, input().split())
ans = 0
for i in range(a, b+1):
    if i % 6 == 0 and i % 8 != 0:
        ans += i

print(ans)