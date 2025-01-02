sam = 0
oh = 0

for i in range(10):
    n = int(input())
    if n % 3 == 0:
        sam += 1
    if n % 5 == 0:
        oh += 1
    
print(sam, oh)