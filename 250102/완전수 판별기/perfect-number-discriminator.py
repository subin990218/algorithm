n = int(input())
ans = 0
for i in range(1, n):
    if n % i == 0:
        ans += i

if ans == n:
    print("P")
else:
    print("N")
