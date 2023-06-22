function sortArray(arr) {
    let low = 0;  // pointer for 0s
    let mid = 0;  // pointer for 1s
    let high = arr.length - 1;  // pointer for 2s
  
    while (mid <= high) {
      if (arr[mid] === 0) {
        // Swap arr[low] and arr[mid]
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
      } else if (arr[mid] === 1) {
        mid++;
      } else if (arr[mid] === 2) {
        // Swap arr[mid] and arr[high]
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
      }
    }
  
    return arr;
  }
  
  // Test case 1
  const arr1 = [0, 2, 1, 2, 0];
  console.log(sortArray(arr1));  // Output: [0, 0, 1, 2, 2]
  
  // Test case 2
  const arr2 = [0, 1, 0];
  console.log(sortArray(arr2));  // Output: [0, 0, 1]
  