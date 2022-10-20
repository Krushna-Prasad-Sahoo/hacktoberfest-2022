#include<stdio.h>
#include<string.h>
struct ftable
{
char name[80];
int sb,nob;
}ft[50];

void main (){
int i,j,n;
char s[30];
printf("\nEnter no:of files");
scanf("%d",&n);
for(i=0;i<n;i++)
{
printf("\nEnter file name%d:",i+1);
scanf("%s",ft[i].name);
printf("\nEnter starting block of block%d:",i+1);
scanf("%d",&ft[i].sb);
printf("\nEnter no:of file blocks%d:",i+1);
scanf("%d",&ft[i].nob);
}
printf("\nEnter the filename to be searched--");
scanf("%s",s);
for(i=0;i<n;i++)
if(strcmp(s,ft[i].name)==0)
break;
if(i==n)
printf("\nfile not found");
else
{
printf("\nFileName StartBlock No of Blocks Blocks occupied");
printf("\n%s\t\t%d\t\t%d\t",ft[i].name,ft[i].sb,ft[i].nob);
for(j=0;j<ft[i].nob;j++)
printf("%d",ft[i].sb+j);
}
}
