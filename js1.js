"use script";
let score = 33;
let run = null;
let average = "33aba"
console.log(typeof(run));
console.log(typeof(score));
let averageIntoNumber = Number(average);
console.log(typeof(average))
console.log(average)
hello 
console.log("converted values: ")
console.log(typeof(averageIntoNumber))
console.log(averageIntoNumber);// if we get NaN it specifies that the 
//number has an alphabet or character in it
// NaN {Not A Number} it's a number data type
let nana = 33
console.log(nana);


//null is converted into string
let data = null
let anotherData = String(data);
console.log(anotherData)
console.log(typeof anotherData)
console.log(anotherData[1])


// js always 
// operations
// string has a higher priority then number
let str2 = 3 + 4 + "5" + 11
console.log(str2)

let _____ = 112;
console.log(_____)


let stringg = " ";
let stringToNumber = Number(stringg)
console.log(stringg)
console.log(typeof stringToNumber)

console.log(+undefined) //NaN


console.log(+"");//0


// comparisions of data-type
// console.log(null > 0) //false 0>0
// console.log(null >= 0) // true ) 0>=0
// comparision and equality operator works differenly here null = 0


console.log("a" > 13) // NaN > 13 => false

// strict check
console.log("2" === 2);
// not strict check
console.log("2" == 2);


// primitive and non- premitive/reffernce data-types
// 7 types : string, number, boolean, null, undefined, symbol, Bigint
// refference: arrays, objects, Functions
// dynamically typed langauge but less safe
// looselypacked language
// based on curretn

const details = {
    name: "parv",
    age: 22,
    userId: Symbol('112')
}
console.log(details['age'])


let strngg = "hitesh";
//allows negative indices
let mayoos = strngg.slice(-3, 6); 
//does not allows negative indices
let maynos = strngg.substring(0,4);
console.log(mayoos);


//.trim() remove additional space

