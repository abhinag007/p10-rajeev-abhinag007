class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function isValidBST(root) {
    return isValidBSTHelper(root, -Infinity, Infinity);
  }
  
  function isValidBSTHelper(node, min, max) {
    if (node === null) {
      return true;
    }
  
    if (node.val <= min || node.val >= max) {
      return false;
    }
  
    return (
      isValidBSTHelper(node.left, min, node.val) &&
      isValidBSTHelper(node.right, node.val, max)
    );
  }
  
  // Example usage
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);
  
  console.log(isValidBST(root)); // Output: true
  