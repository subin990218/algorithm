n = int(input())
a1 = 1
a2 = n
for i in range(n):
    for j in range(n):
        if j % 2 == 0:
            print(a1,end="")
        else:
            print(a2,end="")    
    print()
    a1 += 1
    a2 -= 1