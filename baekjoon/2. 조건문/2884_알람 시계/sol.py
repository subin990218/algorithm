import sys
sys.stdin = open('input.txt')

for tc in range(3):
    h, m = map(int, input().split())
    if m < 45:
        if h == 0:
            h = 23
            m += 15
        else:
            h -= 1
            m += 15

    print(h, m)