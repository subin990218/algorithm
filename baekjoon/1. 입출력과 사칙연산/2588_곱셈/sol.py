import sys
sys.stdin = open('input.txt')

a = int(input())
b = list(map(int, input()))

c = a * b[2]
d = a * b[1]
e = a * b[0]
f = c + d * 10 + e * 100
print(c)
print(d)
print(e)
print(f)


