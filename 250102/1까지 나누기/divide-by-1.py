n = int(input())

divide = 1

while n > 1:
    n = n // divide
    divide += 1

print(divide-1)