// the length property returns the length(size) of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
// console.log(size);

// the length property can also be used to set the length of an array

// fruits.length=2;
// console.log(fruits);

// the toString() method returns the elements of an array as a comma separated string
let myList = fruits.toString();
// console.log(myList);

//get the third element of fruits using at().

let fruit = fruits.at(2);
// fruit = fruits[2];
// console.log(fruit);

// The join() method also joins all array elements into a string

let strFruits = fruits.join(" - ");
// console.log(strFruits);

/**
 * Popping and Pushing:
 *   When you work with arrays, it is easy to remove elements and add new elements.
 *
 *   This is what items out of an array, or pushing items into an array
 */

fruits.pop();
// console.log(fruits);

fruits.push("Kiwi");
// console.log(fruits);

// the push() method returns the new array length
let length = fruits.push("jackfruit");
// console.log(length);

// The shift() method removes the first array element and "shift" all other elements to a lower index

const friends = ["Fahim", "Rahim","Sharif", "karim"];
friends.shift();
// console.log(friends);


// The shift() method returns the value was "shifted out"
let frd = friends.shift();
// console.log(frd);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

let car = ["MBW", "Royal Royells", "HINO", "Volvo"];
car.unshift("Toyata");
// console.log(car);

// The unshift() method returns the new array length
car.unshift("TaTa");
// console.log(car);



// array element are accessed using their index number
// console.log(fruits);
fruits[0] = "Zambura";
// console.log(fruits);


// The length property provides as easy way to append a new element to an array

fruits[fruits.length] = "kata-zamir";
// console.log(fruits);


// Array delete(): using delete() leaves undefined holes in the array. use pop() or shift() instead
// console.log(fruits.length);
delete fruits[1];
// console.log(fruits);



// The concat() method creates a new array by merging (concatenating) existing arrays.


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);


// contact() method does not change the existing arrays. It always returns a new array
// The concat() method can take any number of array arguments

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildrens = arr1.concat(arr2, arr3);
// console.log(myChildrens);


// The concat() method can also take strings as arguments.
const arr4 = ["emil", "tobias", "linus"];
const updateArr4 = arr4.concat("Peter");
console.log(updateArr4);


//------------------ copyWithin() ----------------------//

// The copywithin() method copies array elements to another position in an array.

const fruits1 = [ "Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits1.copyWithin(2,0);
fruits1.copyWithin(2,0,2);
// console.log(fruits1); 


// The flat() method creates a new array with sub-array elements concatenated to a specified depth

const myArr = [[1,2], [3,4], [5,6]];
const newArr = myArr.flat();
console.log(newArr);

// the flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr1 = [1,2,3,4,5,6];
const newArr1 = myArr1.flatMap(x=>[x,x*10]);
console.log(newArr1);

