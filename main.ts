//  Q: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase,and titlecase.

let personName= "HafsaTahir";
console.log("LowerCase:", personName.toLowerCase())
console.log("UpperCase:", personName. toUpperCase())
console.log("TitleCase:", personName.replace(/\b\w/g, c=> c.toUpperCase()))

// console.log("hafsatahir\nHAFSATAHIR\nHafsaTahir");
