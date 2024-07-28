
// question 1
function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    }
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }
  
  scopeTest();
  
/* Result:I am var
  ReferenceError: letVariable is not defined
  ReferenceError: constVariable is not defined
  Explanation:
var is function-scoped, so varVariable is accessible outside the if block.
let and const are block-scoped, so letVariable and constVariable are only accessible within the if block.
Attempting to log letVariable and constVariable outside their block results in ReferenceError.

*/




// question 2



function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"


  // question 3



  function sum(...numbers) {
    return numbers.reduce((pre, curr) => pre + curr, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(10, 20, 30, 40)); // 100
  console.log(sum(5)); // 5
  

  // question 4




  const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



  // question 5

  const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
};

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."



  // question 6



  const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}




  // question 7

  const names = "Alice";
const ages = 25;

const message = `My name is ${names} and I am ${ages} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."



  // question 8

  const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
    console.log(`${student.name}: ${student.grade}`);
  }

// result:Alice: 90
// Bob: 85
// Charlie: 92

  
  // question 9
  const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const number of innerArray) {
      sum += number;
    }
    console.log(sum);
  }

//   Result:6
//   15
//   24



 // question 10

 const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."

  

  