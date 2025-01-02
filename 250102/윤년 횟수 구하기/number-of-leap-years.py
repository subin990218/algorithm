n = int(input())
ans = 0

for i in range(1, n+1):
    if i % 4 == 0:
        ans += 1

        if i % 100 == 0 and i % 400 != 0:
            ans -= 1

print(ans)