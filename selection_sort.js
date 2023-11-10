function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

// Example 
let arrayToSort = [2, 6, 8, 45, 12, 98, 4, 56];
let sortedArray = selectionSort(arrayToSort);
console.log("Sorted Array:", sortedArray);
