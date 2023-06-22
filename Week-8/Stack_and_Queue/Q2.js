function nextGreaterElement(arr) {
    const result = [];
    const stack = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
  
      if (stack.length === 0) {
        result[i] = -1;
      } else {
        result[i] = stack[stack.length - 1];
      }
  
      stack.push(arr[i]);
    }
  
    return result;
  }
  
  // Example usage
  const arr1 = [1, 3, 2, 4];
  const arr2 = [6, 8, 0, 1, 3];
  
  console.log(nextGreaterElement(arr1)); // [3, 4, 4, -1]
  console.log(nextGreaterElement(arr2)); // [8, -1, 1, 3, -1]
  