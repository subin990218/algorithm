a, b = map(int, input().split())

if a > b:
    ans = a
    small = b
else:
    ans = b
    small = a

while ans >= small:
    print(ans, end=" ")
    ans -= 1