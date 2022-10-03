s = "python"
for i in range(0, len(s)):
    for j in range(0, i + 1):
        print(s[j], end='')
    print('')
for i in range(len(s), 0, -1):
    for j in range(0, i - 1):
        print(s[j], end='')
    print('')
