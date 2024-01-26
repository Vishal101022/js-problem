// map is inbuit higher-order-function
// that takes an array do manipulation and returns a new array

const arr = [1, 2, 3, 4, 5];

const double = arr.map((val) => {
    return val * 2;
});

console.log(double);