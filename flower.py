from turtle import *

def fleur():
    for i in range(150):
        circle(190-i,90)
        left(90)
        circle(190-i,90)
        left(18)

fleur()
mainloop()   
