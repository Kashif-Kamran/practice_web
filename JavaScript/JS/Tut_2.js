// Variables in Java Script
// var, const and let is used for declaration of variable
var strVar = `"String" 'varibale' backticks can also be used to encolse the string. and useful to use double quotations and single quotations`
console.log(strVar)
var unInitVar;
unInitVar = 56;
console.log("uninitilized Variable: ", unInitVar);
// Rules for creating variable is same as c++
// NOTE: Let and var actully the same but there is one major differece
// Let: is used to create the block level comment
// while var is used to create the global level 
//premptive data types are on stack 
//like string 
// number
// NULL
// Boolean
//undefined -> when data is not initilized then stored data is undefined
// symbols
// --
// Non premptive are on heap
//functions
// object litrals
// Dates
///////////////////////////////////////////////////////
let name = "kashif kamran";
console.log("My string is " + name);
//
// typeof opertor
console.log("Data of of name varibale is  : ", (typeof name));
// numbers contains both floating point and integers
let marks = 10;
console.log("Data type of marks is : ", (typeof marks));

/// arrays
let array = [1, 2, 3, 4, 5, 6, true, "Kashif kamran"]
console.log(array);
console.log("Data type of array : ", (typeof array))
// object litra
let studentMarks = {
    kashif: 40,
    amir: 20,
    rashid: 30
}
console.table(studentMarks)
//
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.table(person);
let mks = {
    kashif: 67,
    amir: 68,
    rashid: 45
};
console.table(mks)