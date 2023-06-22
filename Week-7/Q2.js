function spiralOrder(matrix) {
    if (matrix.length === 0) {
      return [];
    }
  
    const result = [];
  
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse top row from left to right
      for (let col = leftCol; col <= rightCol; col++) {
        result.push(matrix[topRow][col]);
      }
      topRow++;
  
      // Traverse right column from top to bottom
      for (let row = topRow; row <= bottomRow; row++) {
        result.push(matrix[row][rightCol]);
      }
      rightCol--;
  
      // Check if there are remaining rows and columns
      if (topRow <= bottomRow && leftCol <= rightCol) {
        // Traverse bottom row from right to left
        for (let col = rightCol; col >= leftCol; col--) {
          result.push(matrix[bottomRow][col]);
        }
        bottomRow--;
  
        // Traverse left column from bottom to top
        for (let row = bottomRow; row >= topRow; row--) {
          result.push(matrix[row][leftCol]);
        }
        leftCol++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3,10],
    [4, 5, 6,11],
    [7, 8, 9,12],
    [13,14,15,16]
  ];
  
  const spiralOrderElements = spiralOrder(matrix);
  console.log(spiralOrderElements);
  