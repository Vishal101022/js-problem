// find the Firstnames of users whose age is greater than 30

const user = [
  { firstName: "jhon", lastName: "doe", age: 26 },
  { firstName: "vishal", lastName: "rai", age: 28 },
  { firstName: "niki", lastName: "rai", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "narendra", lastName: "modi", age: 75 },
];

const result = user.reduce((acc, curr) => {
  if (curr.age > 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(result);
