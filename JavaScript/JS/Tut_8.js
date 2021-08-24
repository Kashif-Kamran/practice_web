console.log("Loops of Java Script");
// Syantex is the same as the c++

// For loops , 
for (let i = 0; i < 3; i++)
{
    console.log(i);
}
// While using live server don't save the file untill you complete the code of while loop because then it will start running for infinite loop chrome tab will get hang
let increment = 0;
while (increment < 5)
{
    console.log("While Increment Value: ",increment);
    increment++;
}
/// use of break is the same as in the c++ but use of continue is given below
let itr = 0;
while (itr < 10)
{
    if (itr === 5)
    {
        itr++;
        continue;
    }
    console.log("Value of itr : ",itr);
    itr++;
}
// For array itration with every element there is a method as
// e.g array.forEach(function(element)
//{
//  == Implimention I want to impliment ==
//});
const array = [1,3,4,5,6,4,3];
array.forEach(function (element)
{
    element += 10;
})
console.log("Values Of Array: ")
array.forEach(function (element)
{
    console.log(element);
})
// We can also deal with the arrays as the old way i.e by using loops
let obj = {
    name: "kashif",
    section: "B",
    roll_no: "19I-0541",
    location: "islamabad",
    university: "NU Fast"
}
for (let itr in obj)
{
    console.log(`The ${itr} of object is ${obj[itr]}`);
}