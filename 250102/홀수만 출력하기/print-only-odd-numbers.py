n = int(input())

numbers = [int(input()) for _ in range(n)]

for number in numbers:
    if number % 2 != 0 and number % 3 == 0:
        print(number)