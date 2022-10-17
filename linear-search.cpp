// returns the index of element if present in array

int linear_search(int arr[], int N, int target) {
	for(int i = 0; i < N; i++) {
		if(arr[i] == target)
			return i;
	}
	return -1;
}
