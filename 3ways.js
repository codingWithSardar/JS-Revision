// 3 ways to declare variables in JavaScript
// 1. let
// 2. var
// 3. const

// Scope means where a variable can be accessed.

// let and const are Block Scoped

{
    let name = "Ali";
    const age = 20;

    console.log(name); // Ali
    console.log(age);  // 20
}

// console.log(name); // Error
// console.log(age);  // Error

// Because let and const can only be accessed inside the block.


// var is Function Scoped

{
    var userName = "Sardar";
}

console.log(userName); // Sardar

// var ignores block scope and can be accessed outside the block.
// Variable sirf us function ke andar accessible hoga jahan usay declare kiya gaya hai.
// But if var is inside a function:

function test() {
    var city = "Lahore";
}

// console.log(city); // Error

// Because var is function scoped.


// var
// Can be re-declared and re-assigned

var name = "Sardar";
var name = "Ali";     // Allowed
name = "Abdullah";    // Allowed


// let
// Cannot be re-declared but can be re-assigned

let student = "Sardar";
// let student = "Ali"; // Error
student = "Abdullah";  // Allowed


// const
// Cannot be re-declared and cannot be re-assigned

const country = "Pakistan";

// const country = "India"; // Error
// country = "USA";         // Error