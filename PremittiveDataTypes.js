// ==========================================
// Primitive Data Types in JavaScript
// ==========================================

// Primitive data types wo hote hain jo single/simple value store karte hain.

// Inki value directly variable me store hoti hai.

// Jab ek primitive variable ko dusre variable me assign karte hain,
// to actual value copy hoti hai, reference (address) copy nahi hota.

// Is liye har variable apni alag value rakhta hai.

// Example:

let a = 10;
let b = a; // b me a ki value (10) copy ho gayi

b = 20;

console.log(a); // 10
console.log(b); // 20

// Yahan b ko change karne se a par koi asar nahi pada,
// kyun ke b ke paas value ki apni copy hai.

// Agar reference copy hota to dono variables ek hi data ko point karte
// aur ek me change karne se dusre me bhi change nazar aata.

// Primitive Data Types ko "Copy By Value" bhi kaha jata hai.


// JavaScript me 7 Primitive Data Types hote hain:

// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol



// ==========================================
// 1. String
// ==========================================

// String text ya characters ko store karne ke liye use hoti hai.

let name = "Ali";
let city = 'Lahore';

console.log(typeof name); // string

// String double quotes ("") ya single quotes ('')
// dono me likh sakte hain.



// ==========================================
// 2. Number
// ==========================================

// Number data type integers aur decimal numbers
// dono ko represent karta hai.

let age = 20;
let price = 99.99;

console.log(typeof age); // number

// Example

let x = 10;
let y = 5;

console.log(x + y); // 15



// ==========================================
// 3. Boolean
// ==========================================

// Boolean ki sirf 2 values hoti hain:

// true
// false

let isLoggedIn = true;
let isAdmin = false;

console.log(typeof isLoggedIn); // boolean

// Boolean aksar conditions me use hota hai.

let marks = 80;

console.log(marks >= 50); // true



// ==========================================
// 4. Undefined
// ==========================================

// Jab variable declare ho lekin usko koi value
// assign na ki gayi ho to uski value undefined hoti hai.

let user;

console.log(user); // undefined
console.log(typeof user); // undefined

// JavaScript khud undefined assign karti hai.



// ==========================================
// 5. Null
// ==========================================

// Null ka matlab hai intentionally empty value.

// Jab developer khud batana chahta hai ke
// is variable me filhal koi value nahi hai,
// to null assign karta hai.

let currentUser = null;

console.log(currentUser); // null

// Example:

let loggedInUser = null;

// Baad me user login kare

loggedInUser = "Ali";

console.log(loggedInUser); // Ali

// Important:

console.log(typeof null); // object

// Ye JavaScript ka purana historical bug hai.

// typeof null "object" return karta hai,
// lekin null phir bhi Primitive Data Type hai.



// ==========================================
// 6. BigInt
// ==========================================

// Bohat bari numbers ko store karne ke liye
// BigInt use kiya jata hai.

let bigNumber = 12345678901234567890n;

console.log(typeof bigNumber); // bigint

// BigInt likhte waqt number ke end me
// "n" lagana zaroori hota hai.



// ==========================================
// 7. Symbol
// ==========================================

// Symbol unique values create karne ke liye use hota hai.

// Har Symbol unique hota hai.

let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2); // false

// Dono Symbols alag hain,
// is liye comparison false return karta hai.



// ==========================================
// Quick Revision
// ==========================================

// String    -> "Ali"
// Number    -> 20, 99.99
// Boolean   -> true, false
// Undefined -> let x;
// Null      -> let x = null;
// BigInt    -> 123456789n
// Symbol    -> Symbol()


// ==========================================
// Interview Definition
// ==========================================

// Primitive Data Types simple values store karte hain.

// Inki value directly variable me store hoti hai.

// Jab copy kiya jata hai to actual value copy hoti hai,
// reference ya address copy nahi hota.

// Isi liye Primitive Data Types ko
// "Copy By Value" kaha jata hai.