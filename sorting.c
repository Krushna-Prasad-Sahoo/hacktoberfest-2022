#include <stdio.h>

int main()
{
    int i,n;
    int l;
    int numb;
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++)
    {
    scanf("%d",&arr[i]);
    }
    // printf("%d", arr[5]);
    for(i=1;i<n;i++)
    {
        for(l=i;l>0;l--)
		{
		  if(arr[l]<arr[l-1])
			{
				numb=arr[l];
				arr[l]=arr[l-1];
				arr[l-1]=numb;
			}
		}	
    }
    for(i=0;i<n;i++){
		printf("%d",arr[i]);
    }
    return 0;
}

