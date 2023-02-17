import sys
sys.stdin = open('input.txt', 'r')

# 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개

for tc in range(2):
    mal = list(map(int, input().split()))
    answer = [1-mal[0], 1-mal[1], 2-mal[2], 2-mal[3], 2-mal[4], 8-mal[5]]
    print(*answer)