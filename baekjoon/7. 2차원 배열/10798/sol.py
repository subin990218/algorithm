import sys
sys.stdin = open('input.txt')

words = []
longest = 0

for _ in range(5):
    word = input()
    words.append(word)
    if len(word) > longest:
        longest = len(word)

answer = ''
for x in range(longest):
    for y in range(5):
        if x < len(words[y]):
            answer += words[y][x]

print(answer)