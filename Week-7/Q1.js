function maxSumContiguousSubarray(A) {
    let maxSum = A[0];  // Initialize the maximum sum with the first element
    let currentSum = A[0];  // Initialize the current sum with the first element
  
    for (let i = 1; i < A.length; i++) {
      // Check if adding the current element to the current sum gives a larger sum
      currentSum = Math.max(A[i], currentSum + A[i]);
      
      // Update the maximum sum if the current sum is larger
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Example usage:
  const A1 = [1, 2, 3, 4, -10];
  console.log(maxSumContiguousSubarray(A1));  
  
  const A2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSumContiguousSubarray(A2));  
  