c, n1 = input().split()
n = int(n1) 

if c == 'A':
    ans = 1
    for _ in range (n):
        print(ans, end=" ")
        ans += 1
else:
    ans = n
    for _ in range(n):
        print(ans, end=" ")
        ans -= 1