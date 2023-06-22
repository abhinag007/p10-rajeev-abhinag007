class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function maxDepth(root) {
    if (root === null) {
      return 0;
    }
  
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
  
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // Example usage
  const root = new TreeNode(1);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  console.log(maxDepth(root)); // Output: 3
  