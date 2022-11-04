# Guess-The-Number
This program deals with the idea of matching user entered number and random numbers. Depending upon the times the user tried s/he will get a score (100 - times tried/number of guesses). This will also tell the user if guessed number is less or more than the random number. once both numbers matches the program will terminate and show the score.

## Copy this code and go to your browser's console and then paste it. Play and Enjoy!!!

```
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

```
