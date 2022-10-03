## python program for marksheet grade

marks = float(input("Enter your marks: "))

if marks > 70:
    print("Grade: A")
elif marks >= 60 and marks < 70:
    print("Grade: B")
elif marks >= 50 and marks < 60:
    print("Grade: C")
elif marks >= 40 and marks < 50:
    print("Grade: D")
else:
    print("Grade: E") 
