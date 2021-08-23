// Strings are important In Web Development
console.log("We are at Tutorial # 6");
//Use of Cancatination
let name = "Kashif";
let greeting = "Good morning";
console.log(greeting + ", " + name);
/// Strings get invalid when new line is started
let html;
html = "<h1> This is a heading</h1>" +
    "<p>This is a paragraph tag<p>";

// cancat Function for cancatination of string
let fString;
let lstring;
fstring = "this is first string";
lstring = "this is last string";
fstring = fstring.concat(" _space_ ", lstring, " _space_ ");
console.log(fstring);

// length of string
console.log("length of fstring: ", fstring.length);
let upCaseString = "THIS IS kashif KAMRAN";
console.log("lower case sting: ", upCaseString.toLowerCase());
// again to uppper casre
console.log("Upper case sting: ", upCaseString.toUpperCase());

// indexing and index opperator is same []
console.log("Element at index : 0: ", upCaseString[0])

// Index of functions and last index of function
console.log(upCaseString.indexOf("KAMRAN"));// gives the index of first occurance
console.log(upCaseString.lastIndexOf("KAMRAN"))
// Gives index of last occurance
// String is not present it will return -1
// charAt(number) is the index opperator same as square bracket

console.log("if the string ends with entered string: ", upCaseString.endsWith("KAMRAN"))
// returns boolian value

console.log("If String contains the entered string: ", upCaseString.includes("kashif"))// returns boolian values

// substring of string
console.log("Sub String: ", upCaseString.substring(0, 7))
// starting index to ending index -1

// For the important functionality of string tokenization there is a function call split which splits the string in different parts based on the charater passed as delimeter

console.table(upCaseString.split(' '));// It removs the delemiter passed and returns the array

console.log(upCaseString.replace("THIS", 'IT')) // replaces the first occarance
console.clear();
////////////////////////////////////////////////////////////////////


/// TEMPLATE LITRALS
console.log("===============Now This is the time to show th JS code in HTML===================")
let greetings;
let fullName = "Kashif Kamran"
greetings = "Good Mornining,";
let showHtml = `<h1> Hello , ${greetings} To All, </h1>
    <h2> This is ${fullName}</h2>`;
document.body.innerHTML = showHtml;
