// call method
const Person = {
  firstname: "vishal",
  lastname: "kumar",
};

function printNames(city, age) {
  console.log(this.firstname + " " + this.lastname + " " + city + " " + age);
}
// call method
printNames.call(Person, "ranchi", 45);

// apply method
printNames.apply(Person, ["ranchi", 26]);

// bind method
const boundPrintNames = printNames.bind(Person, "ranchi", 46);
boundPrintNames();
