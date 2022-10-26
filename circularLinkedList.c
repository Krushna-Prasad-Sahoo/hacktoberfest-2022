#include<stdio.h>
#include<stdlib.h>
struct node
{
    int data;
     struct node *link;
};

struct node *create(struct node *tail,int n)
{
    struct node *newp;
    newp=malloc(sizeof(struct node));
    tail=newp;
    int i,data;
    printf("Enter the data of node 1 : ");
    scanf("%d",&data);
    newp->data=data;
    newp->link=newp;
    for(i=2;i<=n;i++)
    {
        printf("Enter the data for node %d : ",i);
        scanf("%d",&data);
        newp=malloc(sizeof(struct node));
        newp->data=data;
        newp->link=tail->link;
        tail->link=newp;
        tail=tail->link;
    }
    return tail;

}

struct node *addatend(struct node *tail)
{
    int data;
    printf("Enter the data for node : ");
        scanf("%d",&data);
        struct node *newp=malloc(sizeof(struct node));
        newp->data=data;
        newp->link=tail->link;
        tail->link=newp;
        tail=tail->link;
        return tail;

}

struct node *addatbeg(struct node *tail)
{
    int data;
    printf("Enter the data for node : ");
    scanf("%d",&data);
    struct node *newp=malloc(sizeof(struct node));
    newp->data=data;
    newp->link=tail->link;
    tail->link=newp;
    return tail;
}

struct node *newnode(struct node *tail)
{
    tail=malloc(sizeof(struct node));
    int data;
    printf("Enter data of node : ");
    scanf("%d",&data);
    tail->data=data;
    tail->link=tail;
    return tail;
}

struct node *addatpos(struct node *tail)
{
    int data,pos;
    printf("\nEnter the position to add new node: ");
    scanf("%d",&pos);
    struct node *newp=malloc(sizeof(struct node));
   
    struct node *ptr;
    ptr=tail;
    if(pos==0)
    return tail;
    else if(pos==1&&tail==NULL)
     tail=newnode(tail);
     else if(pos==1)
    tail=addatbeg(tail);
    else
    {for(int i=1;i<=pos-1;i++)
    ptr=ptr->link;

   
    if(ptr==tail)
    tail=addatend(tail);
    else
    {
         printf("Enter the data for node : ");
        scanf("%d",&data);
        newp->data=data;
        newp->link=ptr->link;
        ptr->link=newp;

    }}
    return tail;
    
}

void print(struct node *tail)
{
    struct node *ptr;
    if(tail==NULL)
    printf("List is empty\n");
    else
    {ptr=tail->link;
    do
    {
        printf("%d ",ptr->data);
        ptr=ptr->link;
    } while (ptr!=tail->link);
    }
}
void main()
{
    int n;
    printf("How many nodes do you want in the circular linked list : ");
    scanf("%d",&n);
    struct node *tail=NULL;
    if(n!=0)
    tail=create(tail,n);

    printf("\nList : \n");
    print(tail);

    tail=addatpos(tail);
    printf("\nList : \n");
    print(tail);

    

}