n = int(input())

classroom = 0 # 교실은 2일 마다
aisle = 0 # 복도는 3일 마다
bathroom = 0 # 화장실은 12일 마다

for i in range(1, n+1):
    if i % 12 == 0:
        bathroom += 1
    elif i % 6 == 0 or i % 3 == 0:
        aisle += 1
    elif i % 2 == 0:
        classroom += 1

print(classroom, aisle, bathroom)

