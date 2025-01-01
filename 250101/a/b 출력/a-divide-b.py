a, b = map(int,input().split())

result = a/b

str_result = f"{result:.23f}"

slicing = str_result.index(".")

str_result = str_result[:slicing + 22]

print(str_result)