const facCar = "Jesko";

let guess = prompt("Guess my favourite car:");

while( (guess!=favCar) && (guess!="quit")){
    guess = propmt("Wrong guess, please try again.");
}

if (guess == favCar) {
    console.log("congrats!!");
} else {
    console.log("you quit.");
}