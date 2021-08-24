console.log("If Else Statement in JS");
// How to take input from user in JS
// let name = window.prompt("Enter Your name : ");
// console.log("Your Name is : ", name);

{

    let value = 1;
    if (value == 19) {
        console.log("Value is 19");
    }
    else if (value == 10) {
        console.log("Value is 10");
    }
    else {
        console.log("Condition is not matched at any stage")
    }
}
// Note: if we pass the string number and pass through the condition then condition will check the value so if we also want to check the type then we have to place === if
{
    let value = "19";
    if (value === 19) {
        console.log("Value is 19");
    }
    else if (value === 10) {
        console.log("Value is 10");
    }
    else {
        console.log("Type or value does not matched");
    }
}
// Notes of some of the operators
// Purpose        |    For Value     |   For value and 
//                | Comparison Only  |    Typel Comparison
//________________|__________________|_____________________
//  Equal To      |     ==           |    ===
// Not Equal To   |     !=           |    !==
// greater then   |      >           |
// greater equal  |      >=           |
// less than      |      <           |      
// less equal     |      <           |      
//  and           |     &&           |
// or             |      ||          |   

{
    // if we want to check that some variable is defianed or not then we have to place a check the check will be like that.
    let vari = 10;
    if (typeof vari === 'undefined') {
        console.log("Vari is Not defined");
    }
    else {
        console.log("Vari is defined");
    }
}
// Another way of contitions
let value2 = 21;
console.log(value2 === 10 ? "value is 10" : "value is not 10"); //ternary Operator
//Switch case statements

switch (value2) {
    case 10:
        console.log("Value is 10")
        break;
    case 12:
        console.log("Value is 12")
        break;
    case 14:
        console.log("Value is 14")
        break;
    case 16:
        console.log("Value is 16")
        break;
    case 18:
        console.log("Value is 18")
        break;
    case 20:
        console.log("Value is 20")
        break;
    default:
        console.log("Value is greater then 20");
}