/**
  Returns the index of the array if the target exists, otherwise returns -1
  
  @param arr        an integer array
  @param N          length of array
  @param target     the searching element
  
  Time Complexity : O(logN)
  Space Complexity: O(1)
*/

int binary_search(int arr[], int N, int target) {
	int start = 0;
	int end = N - 1;
	int mid;

	while(end >= start) {
		mid = (start) + (end - start)/2;  // In order to prevent overflow, this is similar to (start + end)/2

		if (arr[mid] == target)
            return mid;
 
        if (arr[mid] < target)
            start = mid + 1;
 
        else
            end = mid - 1;
	}
	return -1;
}

