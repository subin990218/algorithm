n = int(input())
sumNum = 0
cnt = 0
for _ in range(n):
    num = int(input())
    sumNum += num
    cnt += 1

avg = sumNum/cnt

print(f"{sumNum} {avg:.1f}")
