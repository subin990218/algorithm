# 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C
# 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C

import sys
sys.stdin = open('input.txt')

A, B, C = map(int, input().split())

print((A+B)%C)
print(((A%C) + (B%C))%C)
print((A*B)%C)
print(((A%C) * (B%C))%C)