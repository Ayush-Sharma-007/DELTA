// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// loops are used to iterate a piece of code
// for(initialisation;condition; updation) {
    //do something
//}


// Never ever use infinite loop in your code

for(let i=1;i<=5;i++){
    console.log(i);
}
for(let i=1;i<=10;i++){
    console.log(i);
}


for(let i=5; i>=1;i--){
    console.log(i);
}

// Print all odd numbers from 1 to 15
for(let i=1;i<=15;i+=2){
    console.log(i);
}

// Print all even numbers from 2 to 10
for(let i=2;i <= 10;i+=2){
    console.log(i);
}

// Print the multiplication table of 5

for(let i=1;i<=10;i++){
    console.log(i*5);
}

let n = prompt("Enter a number:");
n=parseInt(n);
for(let i=n;i<=n*10;i+=n){
    console.log(i);
}