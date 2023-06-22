function threeSumClosest(nums, target) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    let closestSum = Infinity;
    let minDiff = Infinity;
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        const diff = Math.abs(sum - target);
  
        if (diff === 0) {
          // Found the exact sum, return it
          return sum;
        }
  
        if (diff < minDiff) {
          // Update the closest sum and minimum difference
          closestSum = sum;
          minDiff = diff;
        }
  
        if (sum < target) {
          left++; // Move the left pointer to increase the sum
        } else {
          right--; // Move the right pointer to decrease the sum
        }
      }
    }
  
    return closestSum;
  }
  
  // Test case
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const closestSum = threeSumClosest(nums, target);
  console.log("Closest sum:", closestSum);
  