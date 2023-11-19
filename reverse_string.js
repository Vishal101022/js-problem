// brute force  approach
function reverseString(str) {
    // Your code here
    let temp = "";  // temp varible to store reverse string
    // for loop starting from backward
    for(let i=str.length-1; i >= 0; i--){ 
         // taking each char from last and store in temp
         temp += str[i];
    }
    // return temp 
    return temp;
  }
  
  // Test cases
  console.log(reverseString("Hello, World!")); // Output: "!dlroW ,olleH"
  console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
  console.log(reverseString("12345")); // Output: "54321"
  