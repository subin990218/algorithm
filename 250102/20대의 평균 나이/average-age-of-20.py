total = 0
cnt = 0
while True:
    n = int(input())
    if n // 10 != 2:
        print(f"{total/cnt:.2f}")
        break
    cnt += 1
    total += n
