function isMatchingPair(char1, char2) {
    if (char1 === "(" && char2 === ")") {
      return true;
    }
    if (char1 === "[" && char2 === "]") {
      return true;
    }
    if (char1 === "{" && char2 === "}") {
      return true;
    }
    return false;
  }
  
  function isBalanced(expression) {
    const stack = [];
  
    for (let i = 0; i < expression.length; i++) {
      const currentChar = expression[i];
  
      if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
        stack.push(currentChar);
      } else if (
        currentChar === ")" ||
        currentChar === "]" ||
        currentChar === "}"
      ) {
        if (stack.length === 0) {
          return false;
        }
  
        const topChar = stack.pop();
  
        if (!isMatchingPair(topChar, currentChar)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage
  const expression1 = "{([])}";
  const expression2 = "()";
  const expression3 = "([]";
  
  console.log(isBalanced(expression1)); // true
  console.log(isBalanced(expression2)); // true
  console.log(isBalanced(expression3)); // false
  