function sum(a, b,c) {
  return a + b + c;
}

console.log("The sum of these number is " + sum(3, 5, 10));
console.log("The sum of these number is " + sum(10, 50, 30));
console.log("The sum of these number is " + sum(2,89,99));

// Arrow Function-->
const func1 = (a) => {
  console.log("I am an arrow function " + a);
};

func1(43);
func1(56);

function greet(name) {
  console.log(" Hey " + name + " you are nice ");
  console.log(" Hey " + name + " you are good ");
  console.log(" Hey " + name + " your t-shirt is nice ");
}

greet("Rahul");
greet("Shruti");

