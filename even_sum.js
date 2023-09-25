// Write a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers in the array. If there are no even numbers in the array, the function should return 0.

// For example, if the input array is [1, 2, 3, 4, 5, 6], the function should return 12 because the even numbers in the array are 2, 4, and 6, and their sum is 12.

// Your function should have the following signature:

// function sumOfEvenNumbers(arr) {
//   let sum = 0;
//   for (i of arr) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }


function sumOfEvenNumbers(arr) {
  return arr.reduce(
    (sum, current) => (current % 2 === 0 ? sum + current : sum),
    0
  );
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));
