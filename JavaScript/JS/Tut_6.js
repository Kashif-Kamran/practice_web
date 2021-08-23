console.log("Tutorial 6 | Arrays and Objects ");
// Basic Syntax of creation of array
let marks = [73, 74, 93, 56, 74];
const fruits = ["orange", "apple", "pineabble", "bnana"];
const mixed = ["orange", 93, "apple", "bnana"];

console.log("Array of Marks: ", marks);
console.log("Array of Fruits: ", fruits);
console.log("Array of Mixed elements: ", mixed);

let arr = new Array('pineable', "bnana", 34, 43, "watermylun")
console.log("Array of Mixed Elements: ", arr);

// Properties are the functions of array that do not end with the round brackets , and methods are the functions of array class
//e.g
console.log("Length of Array: ", arr.length); // .length of the property
console.log("Given is array or not?  : ", Array.isArray(arr)); // tells whether the passed element is array or not

// index operator is same as the c++
arr[0] = "kashif"
console.log("Updated Array : ", arr);
// index of functions tells on which index value is present
let requiredIndex = marks.indexOf(93); // returns index of value and if value is not present it will return -1
console.log("Required Index is : ", requiredIndex);

// Mutating of array
// entering new entry at end 
marks.push(50);
console.log("Update Array of Marks is (use of push) : ", marks);
// entering element at the start . unshift
marks.unshift(60);
console.log("Update Array of Marks is (use of unshift) : ", marks);
// removal of element from the end: .pop()
let value = marks.pop();
console.log("Removed value from the end: ", value);
// removal of element from the start of array: . shift()
value = marks.shift();
console.log("Removed Value from the start : ", value);
// removal or more then oone elements: splice(starting_index, how_many_elements)
//marks.splice(1, 3);
console.log("Update Array of Marks is (use of unshift) : ", marks);
// reversing of array 
marks.reverse()
console.log("Update Array of Marks is (use of unshift) : ", marks);
// 
let marks2 = [1, 2, 3, 4, 5, 6];
marks = marks.concat(marks2);
console.log("Marks array after concatination : ", marks)





