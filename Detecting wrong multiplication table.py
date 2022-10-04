"""
The task you have to perform is “Fake Multiplication Tables”.
This task consists of a total of 15 points to evaluate your performance.

Problem Statement:-

 Rohan das is a fraud by nature. Rohan Das wrote a python function to print a multiplication table
 of a given number and put one of the values (randomly generated) as wrong.

Rohan Das did this to fool his classmates and make them commit a mistake in a test. You cannot tolerate
this!

So you decided to use your python skills to counter Rohan’s actions by writing a python program that
validates Rohan’s multiplication table.

Your function should be able to find out the wrong values in Rohan’s table and expose Rohan Das as a
fraud.

Note: Rohan’s function returns a list of numbers like this
Rohan Das’s Function Input:

rohanMultiplication(6)
Rohan’s function returns this output:

[6, 12, 18, 26, …...., 60]

You have to write a function isCorrect(table, number) and return the index where rohan’s function is
wrong and print it to the screen! If the table is correct, your function returns None
"""
import random
n = int(input("Enter the number for which you want to print the multiplication table: "))
mul = int(input("Enter up to where you want to print multiplication table: "))
lst = []
for i in range(1, mul+1, 1):
    if i == random.randint(1, 9):
        res = random.randint(1, 100)
    else:
        res = n * i
    lst.append(res)
print(lst)


def is_Correct(n1, mul1):
    lst1 = []
    global lst
    for j in range(1, mul1 + 1, 1):
        result = n1 * j
        lst1.append(result)
    for k in range(len(lst1)):
        if lst1[k] != lst[k]:
            print(f"The correct result at {k+1} place will be {lst1[k]} instead of {lst[k]}")

        else:
            pass
    print(f"The correct table is {lst1}")


is_Correct(n, mul)
