// LECTURE 3

// Loops & Strings

// 1. print all the even number

for(let n = 0; n<=100; n++){
    if(n%2 == 0 ){
        console.log(n);
    }
}


// 2. Prompt the user to enter their full name. Generate a username for them based on the input. Start with @, followed by their fullname and ending 
// with the fullname length.    
let fullname = prompt("enter your fullname without any spaces: ");

let userName = "@" + fullname + fullname.length;

console.log(userName);