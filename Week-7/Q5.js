function findPairWithDifference(A, B) {
    const set = new Set(); // Create a set to store the unique elements of the array
  
    for (let i = 0; i < A.length; i++) {
      const num1 = A[i] - B; // Calculate the potential first number in the pair
      const num2 = A[i] + B; // Calculate the potential second number in the pair
  
      if (set.has(num1) || set.has(num2)) {
        // If either of the potential numbers is present in the set, a pair exists
        return 1;
      }
  
      set.add(A[i]); // Add the current element to the set
    }
  
    return 0; // No pair with the given difference exists
  }
  
  // Test case 1
  const A1 = [5, 10, 3, 2, 50, 80];
  const B1 = 78;
  console.log(findPairWithDifference(A1, B1)); // Output: 1
  
  // Test case 2
  const A2 = [-10, 20];
  const B2 = 30;
  console.log(findPairWithDifference(A2, B2)); // Output: 1
  