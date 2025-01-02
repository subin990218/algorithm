a, b = map(int, input().split())

ans = 1

for i in range(b):
    ans *= a

print(ans)