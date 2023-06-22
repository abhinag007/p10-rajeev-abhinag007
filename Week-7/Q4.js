function maxProfit(prices) {
    let minPrice = Infinity; // Set the initial minimum price to infinity
    let maxProfit = 0; // Initialize the maximum profit to 0
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i]; // Update the minimum price if a smaller price is found
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice; // Update the maximum profit if a larger profit is found
      }
    }
  
    return maxProfit;
  }
  
  // Test case 1
  const prices1 = [7, 1, 5, 3, 6, 4];
  console.log(maxProfit(prices1)); // Output: 5
  
  // Test case 2
  const prices2 = [7, 6, 4, 3, 1];
  console.log(maxProfit(prices2)); // Output: 0
  