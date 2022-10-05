Problem Statement:
Given an input stream of N integers (alongwith the operation on these integers), 
the task is to print the number of the distinct elements in the stream after each operation.
The array is will be having positive and negative values. 
Positive value meaning you have to append it into your database and Negative value means 
you have to remove it from your database if present and at every step you have to count the number of distinct character in your database.

Solution:
ArrayList<Integer> maxDistinctNum(int arr[], int n)
    {
        int counter=0;
        ArrayList<Integer> array=new ArrayList<Integer>();
        HashMap<Integer,Integer> number=new HashMap<Integer,Integer>();
        for(int i=0;i<n;++i)
        {
            if(arr[i]>0)
            {
                if(!number.containsKey(arr[i]))
                {
                    number.put(arr[i],1);
                    ++counter;
                }
                else
                {
                    if(number.get(arr[i])==0)
                    {
                        number.put(arr[i],number.get(arr[i])+1);
                        ++counter;
                    }
                    else
                        number.put(arr[i],number.get(arr[i])+1);
                }
            }
            else
            {
                if(number.containsKey(-arr[i]))
                {
                    if(number.get(-arr[i])!=0)
                    {
                        number.put(-arr[i],number.get(-arr[i])-1);
                        --counter;
                    }
                    if(number.get(-arr[i])>0)
                        ++counter;
                }
            }
            array.add(counter);
        }
        return array;
    }
