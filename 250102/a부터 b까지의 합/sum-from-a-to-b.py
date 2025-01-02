a, b = map(int, input().split())

sum_ans = 0

for i in range(a, b+1):
    sum_ans += i

print(sum_ans)