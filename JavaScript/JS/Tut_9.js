console.log("_____Tutorials Of Functions_____");
/* -------------------------------------------------------------------------- */
/*                              Global Variables                              */
/* -------------------------------------------------------------------------- */
var value = 0;
/* -------------------------------------------------------------------------- */
/*                              Defined Functions                             */
/* -------------------------------------------------------------------------- */
/* ------------------------- One Parameter Function ------------------------- */
function greeting(name = "(Unknown)") 
{
    // Defaul Value will be shown when no parameter is passed
    console.log(`Hello ${name}, I hope you will be in best of your health`);
}

/* -------------------- Function with multiple parameters ------------------- */
function test(para1,para2) 
{
    // Two parameters Functions
    console.log(`Parameter 1 : ${para1}`);
    console.log(`Parameter 2 : ${para2}`);
}

/* ----------------------- Function with return value ----------------------- */
function retTestFunc() 
{
    // it will increment the global variable and return
    value = value + 1;
    return value;
}
/* ------------------------- Assigning to a variable ------------------------ */
const fun = function (par1,par2)
{
    // Just prompt
    console.log(`Fun with Par1: ${par1}`);
    console.log(`Fun with Par2: ${par2}`);
}
/* -------------------------------------------------------------------------- */
/*                             Main Code Exection                             */
/* -------------------------------------------------------------------------- */
/* ------------------------ Declaration of variables ------------------------ */
let nme = "Kashif Kamran";
let Fst = "First ";
let Scnd = "Second";
/* -------------------------- Calling of Functions -------------------------- */
test(Fst,Scnd);
greeting();
// Functions below is called multiple times to increment the Global value
retTestFunc();
retTestFunc();
retTestFunc();
retTestFunc();
let val = retTestFunc();
console.log(`Getting value from the returning function : ${val}`);
fun('Ali','Ahmed');
