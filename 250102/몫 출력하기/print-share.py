cnt = 0

while cnt <= 3:
    n = int(input())
    if n % 2 != 0:
        continue
    else:
        print(n//2)
        cnt += 1