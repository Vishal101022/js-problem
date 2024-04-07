function findLongestWordLength(str) {
  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 0;
    }
  }
  maxLength = Math.max(maxLength, currentLength); 
  return maxLength;
}

console.log(findLongestWordLength("Hello JavaScript")) 
