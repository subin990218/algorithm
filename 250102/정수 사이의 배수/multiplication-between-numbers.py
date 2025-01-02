a, b = map(int, input().split())

sum_num = 0
cnt = 0

for i in range(a, b+1):
    if i % 35 == 0:
        sum_num += i
        cnt += 1
    elif i % 7 == 0 or i % 5 == 0:
        sum_num += i
        cnt += 1

avg = sum_num / cnt

print(f"{sum_num} {avg:.1f}")
