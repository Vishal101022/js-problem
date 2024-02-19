//function to reverse an array

/*function revArray(arr) {
    let temp = [];
    for (let i = arr.length-1; i >= 0; i--){
        temp.push(arr[i]);
    }
    return temp;       return arr.reversed();
}

const  array = [1, 2, 3, 4, 5];
// calling the Fn
console.log(revArray(array));*/

// reverse an array with reduce method (interview Question)

function revArray(arr) {
  return arr.reduce((acc, element) => {
    acc.unshift(element);
    return acc;
  }, []);
}

const array = [1, 2, 3, 4, 5];

console.log(revArray(array));

