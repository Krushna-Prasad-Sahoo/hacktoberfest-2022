import java.util.*;
public class trianglePattern {

    public static void main(String [] args)
    {
        Scanner scan = new Scanner(System.in);

        try{
            System.out.print("Enter number: ");
            int num = scan.nextInt();
            int i,j,k, count = num - 1, n =1;
            for(i = 1; i<=num; i++)
            {
                for(j = 1;j<=count ;j++)
                {
                    System.out.print(" ");
                }
                for(k =1 ;k <=n;k++ )
                System.out.print("*");

                System.out.println();
                n += 2;
                count -=1;
            }

            
           
        }
        finally{
            scan.close();

        }
    
    }
    
}
