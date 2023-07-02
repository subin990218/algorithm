import sys
sys.stdin = open('input.txt')

T = int(input())
paper = [[0]*101 for i in range(101)]
for _ in range(T):
    x, y = list(map(int, input().split()))

    for row in range(x, x+10):
        for col in range(y, y+10):
            paper[row][col] = 1

answer = 0

for x in paper:
    if x == 1:
        answer += 1

print(answer)