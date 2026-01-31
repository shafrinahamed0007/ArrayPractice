// Example-1
const cars = ["Saab", "Volvo", "BMW"];

// Spaces and lune breaks are not important. A declaration can span multiple lines

const cars1 = [
    "Saab",
    "Volvo",
    "BMW"
]

// You can also create an empty array, and provide elements later:

const cars2 = [];
cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";

// Using the JS keyword new - The following also create an Array, and assigns values to it:

const cars3 = new Array("Saab", "Volvo", "BMW");


// Accessing Array Elements - You access an array element by referring to the index number.
// Note: Array indexed start with 0

const cars4 = ["Saab", "Volvo", "BWM"];
// console.log(cars4[1]);


// Changing an Array element
cars4[1] = "Opel";
// console.log(cars4);

// Converting an Array to a String

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const strFruits = fruits.join(", ");
// console.log(strFruits);


// arrays use numbers to access its elements.

const person = ["John", "Doe", 46];
// console.log(person[0]);

// Object use names to access its members .

const person1 = {firstName: "John", lastName: "Doe", age: 26};
// console.log(person1.lastName);

// The length property of an array returns the length of an array
const fruits1 = ["Banana", "Orange", "Apple","Mango"];
console.log(fruits1.length);

// Note: The length property is always one more than the highest array index

// Accessing the last element
console.log(fruits1[fruits1.length-1]);
