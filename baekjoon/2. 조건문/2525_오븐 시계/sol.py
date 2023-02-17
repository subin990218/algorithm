import sys
sys.stdin = open('input.txt')

for tc in range(3):
    h, m = map(int, input().split())
    time = int(input())
    H = time // 60
    M = time % 60

    h += H
    m += M
    
    if m >= 60:
        h += 1
        m -= 60
    if h >= 24:
        h -= 24
    
    print(h, m)

