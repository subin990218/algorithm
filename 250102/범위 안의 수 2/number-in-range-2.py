sum_num = 0
cnt = 0

for _ in range(10):
    n = int(input())
    if n >= 0 and n <= 200:
        sum_num += n
        cnt += 1

print(f"{sum_num} {sum_num/cnt:.1f}")