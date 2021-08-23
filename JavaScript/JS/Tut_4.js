// converstion form string
let marks = 56;
console.log(marks, "is a " + (typeof marks))
marks = String(marks);
console.log(marks, "is a " + (typeof marks))

// Boolean 
let boolvar = true;
console.log("boolenvar is  " + (typeof boolvar));
boolvar = String(boolvar)
console.log("boolenvar is  now " + (typeof boolvar));
// Date
let Mydate = new Date();
console.log("date : ", Mydate);
console.log("type of Data : ", (typeof Mydate))
Mydate = String(Mydate);
console.log("Type of Data : ", (typeof Mydate))

// Another function for string converstion
let number = 45;
console.log("Number : ", number, " With type : ", (typeof number));
number = number.toString()
console.log("Number : ", number, " With type : ", (typeof number));

// Similarly To number 
console.log("=====Converstion To number=======")
let numString = "45"
console.log("Number is : ", numString, "With Type : ", (typeof numString));
numString = Number(numString);
console.log("Number is : ", numString, "With Type : ", (typeof numString));

// I will show the error if string contains characters which are not a number (NaN = Not a Number)
let numStr2 = Number("89ad")
console.error("Number is : ", numStr2, "With Type : ", (typeof numStr2));

// parseInt is used to to convert a string or number with decimals to number
// eg
let num1 = "89.232";
console.log("Number is : ", num1, " With type : ", typeof num1)
num1 = parseInt(num1)
console.log("Number is : ", num1, " With type : ", typeof num1)

// parseFloat( Use of this functions)
let num2 = "89.1231";
console.log("Number is : ", num2, " With type : ", typeof num2)
num2 = parseFloat(num2);
console.log("Number is : ", num2, " With type : ", typeof num2)
// num2 = parseInt(num2);
// console.log("Number is : ", num2, " With type : ", typeof num2)


// .toFixed is used for round of number to specific decimal numbers
num2 = num2.toFixed();
console.log("Number is : ", num2, " With type : ", typeof num2)

// 

