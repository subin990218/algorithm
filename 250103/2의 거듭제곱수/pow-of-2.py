n = int(input())

ans = 0

while n != 1:
    n /= 2
    ans += 1

print(ans)