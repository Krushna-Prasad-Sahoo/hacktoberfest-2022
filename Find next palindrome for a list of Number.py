"""
The task you have to perform is “Palindrome List.”
This task consists of a total of 10 points to evaluate your performance.

Problem Statement:-

You are given a list that contains some numbers. You have to print a list of the next
palindromes only if the number is greater than 10; otherwise, you will print that number.

Input:

[1, 6, 87, 43]
Output:

[1, 6, 88, 44]
"""

from FindTheNextPalindrome import is_palindrome

lst = []
n = int(input("Enter the length of the list: "))
for i in range(n):
    var = int(input("Enter the number of the list: "))
    lst.append(var)

print(f"Original List is: {lst}")

for i in range(n):
    while True:
        if is_palindrome(lst[i]) is True or lst[i] < 10:
            break
        else:
            lst[i] = lst[i] + 1

print(f"The next palindrome list is : {lst}")

