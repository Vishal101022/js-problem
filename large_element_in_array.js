// linear search approach O(n) time complexity
function findLargestElement(arr) {
    // Initialize a variable to store the largest element
    let largestElement = arr[0]; 
    
    // Iterate through the array to find the largest element
    for (let i = 1; i < arr.length; i++) {
        // Compare each element with the current largestElement
        // Update largestElement if a larger element is found
        if(arr[i] > largestElement) {
            largestElement = arr[i];
        }
        
    }
    return largestElement;
    
}

// Example usage:
const array = [5, 2, 8, 9, 1,98,12,109,45,67,89];
const result = findLargestElement(array);
console.log("The largest element is:", result);

// i was thinking for better approach 
  // - first sort the array in ascending order
  // - then return the last element

// but the time complexity is O(nlogn) which is not good 