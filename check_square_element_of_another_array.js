function areSquares(arr1, arr2) {
    // Initialize two maps to store the count of each element in the respective arrays
    let map1 = {};
    let map2 = {};

    // Populate map1 with counts of elements in arr1
    for (item of arr1) {
        map1[item] = (map1[item] || 0) + 1;
    }

    // Populate map2 with counts of elements in arr2
    for (item of arr2) {
        map2[item] = (map2[item] || 0) + 1;
    }

    // Check if the squared keys in map1 exist in map2 with matching counts
    for (let key in map1) {
        // If the squared key doesn't exist in map2, arrays are not squares
        if (!map2[key * key]) {
            return false;
        }
        // If the counts of the original key and its square are not the same, arrays are not squares
        if (map1[key] !== map2[key * key]) {
            return false;
        }
    }

    
    return true;
}

// Example usage
let array1 = [2, 3, 4, 5];
let array2 = [9, 4, 25, 16];


let result = areSquares(array1, array2);
console.log(result);
