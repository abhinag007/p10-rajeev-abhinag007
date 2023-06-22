function findJudge(n, trust) {
    const trustCount = new Array(n + 1).fill(0);
  
    for (let [a, b] of trust) {
      trustCount[a]--;
      trustCount[b]++;
    }
  
    for (let i = 1; i <= n; i++) {
      if (trustCount[i] === n - 1) {
        return i;
      }
    }
  
    return -1;
  }
  
  // Example usage
  const n = 3;
  const trust = [[1, 3], [2, 3]];
  
  console.log(findJudge(n, trust)); // Output: 3
  