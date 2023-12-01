// find the factorial of a number
 // time complexity O(n)
 function fact(n) {
    // base case
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  
  // Test cases
  console.log(fact(4)); 
  