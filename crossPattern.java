import java.util.*;
public class crossPattern {
    
    public static void main(String [] args)
    {
        Scanner scan = new Scanner(System.in);

        try{
            System.out.print("Enter number: ");
            int num = scan.nextInt();
            int i,j,k,mid = num * 2 -3, in = 0;
            for(i = 1;i<=num;i++)
            {
                for(j=1;j<=in;j++)
                {
                    System.out.print(" ");
                }
                System.out.print("*");
                for(k = 1;k<=mid;k++)
                {
                    System.out.print(" ");
                }
                if(i != num)
                System.out.println("*");
                in +=1;
                mid -=2;
            }
            System.out.println();
            mid = 1;
            in = in -2;
            for(i = 1; i< num;i++)
            {
                for(j = 1;j<= in;j++)
                {
                    System.out.print(" ");
                }
                System.out.print("*");
                for(k = 1;k <=mid;k++)
                {
                    System.out.print(" ");
                }
                System.out.println("*");

                mid += 2;
                in -=1;
            }
            
           
        }
        finally{
            scan.close();

        }
    
    }
}
