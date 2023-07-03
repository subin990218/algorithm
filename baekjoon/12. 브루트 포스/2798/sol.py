import sys
sys.stdin = open('input.txt')

N, M = map(int, input().split())
cards = list(map(int, input().split()))

answer = 0

for i in range(N - 2):
    for j in range(i + 1, N - 1):
        for z in range(j + 1, N):
           card_combination = cards[i] + cards[j] + cards[z]
           if card_combination <= M:
            if card_combination > answer:
                answer = card_combination
print(answer)