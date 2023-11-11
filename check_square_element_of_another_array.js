function areSquares(arr1, arr2) {
    // Check if both arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check if each element in arr2 is the square of the corresponding element in arr1
    for (let i = 0; i < arr1.length; i++) {
        if (Math.pow(arr1[i], 2) !== arr2[i]) {
            return false;
        }
    }

    // If all elements satisfy the condition, return true
    return true;
}

// Example usage
let array1 = [2, 3, 4];
let array2 = [4, 9, 16];

let result = areSquares(array1, array2);
console.log(result); 
