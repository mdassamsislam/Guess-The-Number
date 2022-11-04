// Returns a random integer from 0 to 100
let randNum = Math.round((Math.random() * 10) + 1);
let userInput, chances = 0;
//Convert it from string to number.
let parsed = parseInt(userInput);

do {
    userInput = prompt("Enter Any Number You Guess! (Range: 1-100")
    if (userInput > randNum) {
        alert("Entered Number is greater than Random Number.");
        chances++;
    }
    else if (userInput < randNum) {
        alert("Entered Number is less than Random Number.");
        chances++;
    }
} while (userInput != randNum);
alert(`Hurrah! You entered the random number :) The number was ${randNum} & Your Score is ${100 - chances})`)
