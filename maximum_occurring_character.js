// Find the Maximum Occurring Character in String
function maxOccurringChar(str) {
    const charCount = str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    let maxChar = '';
    let maxCount = 0;

    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return maxChar;
}

// Example usage
let inputString = "hello world";
let result = maxOccurringChar(inputString);
console.log("Maximum occurring character: " + result);
