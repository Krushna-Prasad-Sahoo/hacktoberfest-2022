
a = int(input("Enter a number:"))

b = int(input("Enter another number:"))

c = str(a + b)

f1 = open('sum.txt','w')

f1.write("The sum is")

f1.write(c)

f1.close()
