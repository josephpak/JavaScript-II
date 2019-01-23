// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function calculate (num1, num2) {
  
  return function addTwo() {
    // closure: num1
    // closer: num2
    return num1 + num2;
  }()

}
// calculate(1,2) // 3

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++
    return count;
  }
};
// const newCounter = counter();
// console.log(newCounter()); // 1 
// console.log(newCounter()); // 2
// console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  let count = 0;
  // `decrement` should decrement the counter variable and return it.
  // function that takes the value below and then updates a count and returns it
  // something that gives us either a 1 or -1 
  return {
    increment: () => ++count,
    decrement: () => --count
  }
  
};
const newCounter = counterFactory();
// console.log(counterFactory().increment());
// console.log(counterFactory().increment());
// console.log(counterFactory().increment());
// console.log(counterFactory().increment());
// console.log(counterFactory().increment());

console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.increment());

