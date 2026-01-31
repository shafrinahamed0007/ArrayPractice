// The indexOf() method search an array for an element value and returns its position

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let firstPosition = fruits.indexOf("Apple")+1;
console.log(firstPosition);

// Array.lastIndexOf() is the same as Array.indexOf(), but return the position of the last occurrence of the specified element
let lastPosition = fruits.lastIndexOf("Apple");
console.log(lastPosition);


// Array.includes() to arrays. This allows us to check if an element is present in an array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));

// the find() method returns the value of the first value of the first array element that passed a test function

const numbers = [4,9,16,25,29];
const findNumber = numbers.find(x=>x>10);
// console.log(findNumber);

// the findIndex() method returns the index of the first array element that passes a test function

const number1 = [4,9,16,25,29];
const findNumber1 = number1.findIndex(x=>x>18);
// console.log(findNumber1);

const numbers2 = [27,28,30,40,42,35,30];
const findNumber2 = numbers2.findLast(x=>x>40);
// console.log(findNumber2);


// The findLastIndex() method finds the index of the last element that satisfies a condition

const number3 = [27,28,30,40,42,35,30];
const findNumber3 = number3.findLastIndex(x=>x>40);
console.log(findNumber3);

