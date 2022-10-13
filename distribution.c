#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    int c=0;
    scanf("%d",&n);
    int b[n];
    for(int i=0;i<n;i++)
    {
        scanf("%d",&b[i]);
    }
    for(int i=0;i<n;i++)
    {
        
        if(b[i]%2!=0)
        {
            b[i]=b[i]+1;
            b[i+1]=b[i+1]+1;
            c=c+2;
        }
    }
    if(b[n-1]%2!=0)
    {
        printf("NO");
    }
    else 
    {
        printf("%d",c);
    }
    return 0;

}
