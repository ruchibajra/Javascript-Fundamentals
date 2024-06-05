// objects in js

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 200,

};

console.log(product);
console.log(typeof product); //object
console.log(typeof product["title"]); //string


/* alert and pompt

alert("hello world"); //it only pops up the info 

let name = prompt("hi"); //it takes user input
console.log(name);

*/

//Practice questions

//1. get user to input a number using prompt ("enter a number"). check if the number is a multiple of 5 or not.
// (here is some error in the vs terminal but works fine in browser)
// let num = prompt("enter a number: ");

// if (num%5 === 0){
//     console.log(num, "is multiple of 5");
// }else{
//     console.log(num, "is not a multiple of 5");

// }


/*2. write a code which can give grade to student according to the grade.

A = 90-100
B = 70-89
C = 60-69
D = 50-59
F = 0-49
*/

let score = 75;
let grade;

if(score >= 90 && score<=100){
    grade = "A";
}else if(score >= 70 && score<=89){
    grade = "B";
}else if(score >= 60 && score<=69){
    grade = "C";
}else if(score >= 50 && score<=59){
    grade = "D";
}else if(score >= 0 && score<=49){
    grade = "F";
}

console.log(grade);

