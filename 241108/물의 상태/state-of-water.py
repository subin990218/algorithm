temperature = int(input())

if temperature < 0:
    answer = "ice"
elif temperature >= 100:
    answer = "vapor"
else:
    answer = "water"

print(answer)