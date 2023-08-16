// checking if the array has a zero sum
// input: [-5, 1, 2, 0, 4, 3, -2, -5, 6, -4, 8, 12]
// output: [-4,-4]

// brute force approach
// time complexity: O(n^2)
function compare(a, b) {
  return a - b;
}

let array = [-5, 1, 2, 0, 4, 3, -2, -5, 6, -4, 8, 12];
array.sort(compare);
//   let pairfound = false;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j <= array.length; j++) {
//       if (array[i] + array[j] == 0) {
//         console.log(array[i], array[j]);
//         pairfound = true;
//       }
//     }
//     if (pairfound) {
//       break;
//     }
//   }

// optimized approach
// time complexity: O(n)
function FindSumPair(array) {
  // taking two pointers concept
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    //   calculating the sum of the two pointers
    let sum = array[left] + array[right];
    //  if sum is zero then we found the pair
    if (sum == 0) {
      console.log(array[left], array[right]);
      return;
    } else if (sum > 0) {
      // if sum is greater than zero then we need to decrease the right pointer
      right--;
    } else {
      // if sum is less than zero then we need to increase the left pointer
      left++;
    }
  }
}

FindSumPair(array);
