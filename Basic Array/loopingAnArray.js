// One way to loop through an array, is using a for loop

const fruits = ["Banana", "Orange", "Apple"];
for(let i = 0; i<fruits.length; i++){
    // console.log(fruits[i]);
}

// Adding Array element: The easiest way to add a new element to an array is using the push() method.

const friends = ["Rakib", "Shakib", "Nabib"];
console.log(friends);

friends.push("Lemon");
// console.log(friends);

// New element can also be added to an array using the length property
fruits[fruits.length] = "Lemon";
// console.log(fruits);


// Check is Array or not
console.log(fruits instanceof Array);
console.log(Array.isArray(fruits));

