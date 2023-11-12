function countUniqueNumbers(arr) {
    // Create a Set to store unique numbers
    const uniqueNumbers = new Set(arr);

    // Return the size of the Set, which represents the count of unique numbers
    return uniqueNumbers.size;
}

// Example usage
let numbersArray = [1,1, 2,2, 3, 4,4, 5, 6, 7, 8, 56];
let uniqueCount = countUniqueNumbers(numbersArray);
console.log("Number of unique numbers:", uniqueCount);
