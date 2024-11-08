n = int(input())

if n >= 3000:
    ans = "book"
elif n >= 1000:
    ans = "mask"
elif n >= 500:
    ans = "pen"
else:
    ans = "no"

print(ans)