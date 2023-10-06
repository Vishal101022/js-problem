//23. create a sum()

function sum(num) {
    const func = function (num2) {
      // ternary operator that recursively call sum function
      return num2 ? sum(num + num2) : num;
    };
    // override and type conversion from non-primitive to primitive
    func.valueOf = () => num;
    return func;
  }
  
  console.log(sum(1)(2));
  
  