#Created program using single level inheritance#

class Employee:
 def getEmployeeInfo(self):
   self.__id=input("Enter Employee Id:")
   self.__name=input("Enter Name:")
   self.__salary=int(input("Enter Employee Salary:"))

 def printEmployeeInfo(self):
   print("ID : ", self.__id," , name : ", self.__name, ", Basic Salary : ", self.__salary)

 def getSalary(self):
     return(self.__salary)

class Perks(Employee):
    def getPerks(self):
        self.getEmployeeInfo()
        sal=self.getSalary()
        self.__da=sal*35/100
        self.__hra = sal * 17 / 100
    
    def printPerks(self):
        self.printEmployeeInfo()
        print("Total Salary ", (self.getSalary() + self.__da + self.__hra ) )

S=Perks()
S.getPerks()

print("Employee information ")
S.printPerks()


