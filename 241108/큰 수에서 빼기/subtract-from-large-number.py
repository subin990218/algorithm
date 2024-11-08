a, b = map(int,input().split())

answer = a-b

if answer < 0 :
    answer *= -1

print(answer)