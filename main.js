"use strict";
// Q24,More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one
// False result for each of thefollowing:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than
// or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// creating a variable
let apple = "apple";
// // test for equality
console.log("apple is equal to apple");
console.log(apple == apple);
// test for inequality
console.log("apple is not equal to apple");
console.log(apple != apple);
// test using the lower case function
let upperCaseApple = "APPLE";
// equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");
// not equal to
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(upperCaseApple.toLocaleLowerCase() !== "apple");
// Numerical tests involving equality and inequality
let ten = 10;
let twenty = 20;
// console.log("ten is equal to twenty");
// console.log(ten == twenty);
// not equal to
console.log("ten is not equal to twenty");
console.log(ten !== twenty);
// greater than
console.log("twenty is greater than ten");
console.log(twenty > ten);
// less than
console.log("twenty is less than ten");
console.log(twenty < ten);
// greater than or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);
// less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);
// Tests using "and" and "or" operators(&&)
// using logical and operator 
console.log("twemty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);
console.log("twemty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);
// using logical or operator (||)
console.log("twenty is greater than ten or twenty is not equal to twenty");
console.log(twenty > ten || twenty != twenty);
console.log("twenty is less than ten or twenty is not equal to twenty");
console.log(twenty < ten || twenty !== twenty);
// Test whether an item is in a array
let fruits = ["apple", "orange", "banana"];
console.log("orange is include in my fruit array");
console.log(fruits.includes("orange"));
// Test whether an item is not in a array
console.log("orange is not include in my fruit array");
console.log(!fruits.includes("orange"));
