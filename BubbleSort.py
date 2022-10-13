# Bubble sort in Python

def bubbleSort(array):
    
  # loop to access each array element
  for i in range(len(array)):

    # loop to compare array elements
    for j in range(0, len(array) - i - 1):

      # compare two adjacent elements
      # change > to < to sort in descending order
      if array[j] > array[j + 1]:

        # swapping elements if elements
        # are not in the intended order
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp


data = [-2, 45, 0, 11, -9]

bubbleSort(data)

print('Sorted Array in Ascending Order:')
print(data)

------------------------------------------------------------------------------------------------------------------------------
# Bubble sort in Java

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        ArrayList<List<Integer>> lists = new ArrayList<>();
        for(int i = 0; i < nums.length; i++){
            int counter = 0;
            for(int j = 0; j < nums.length - i -1; j++){
                if(nums[j] > nums[j+1]){
                    swap(nums, j ,j+1);
                        counter = 1;
                }
            }
            if(counter == 0)
                break;
        }
        for(int z = 0; z < nums.length; z++){
            if(nums[0] > 0){
                break;
            }
            if (z > 0 && nums[z] == nums[z - 1]) {
                continue;
            }
            int left = z + 1;
            int right = nums.length -1;
            while(left < right){
                if(nums[z] + nums[left] + nums[right] == 0){
                    lists.add(Arrays.asList(nums[z], nums[left], nums[right]));
                    
                    while(left < right && nums[left] == nums[left+1]){
                        left++;
                    }
                    while(left < right && nums[right] == nums[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                }else if(nums[z] + nums[left] + nums[right] > 0){
                    right--;
                }else{
                    left++;
                }
                
            }
        }
        return lists;
    }
    void swap(int[] arr, int start, int end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
}
