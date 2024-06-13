function countingSort(arr) {
  let n = arr.length;
  if (arr == null || n <= 1) return;

  max = -1;
  // finding max element in arr
  for (let item of arr) max = Math.max(item, max);

  // create new arr of size n+1 of arr
  let fCount = new Array(n + 1).fill(0);

  // count the frequency of arr
  for (let i = 0; i < n; i++) {
    fCount[arr[i]]++;
  }

  // populate the element in arr
  let index = 0;
  for (let i = 0; i <= max; i++) {
    while (fCount[i] > 0) {
      arr[index] = i;
      index++;
      fCount[i]--;
    }
  }

  fCount = [];
  return arr;
}

console.log(countingSort([3, 4, 1, 3, 2, 5, 2, 8]));
