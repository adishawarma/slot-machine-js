const prompt = require("prompt-sync")();

const deposit = () => {

    while (true){

        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepostiAmount = parseFloat(depositAmount);

        if ((isNaN(numberDepostiAmount)) || (numberDepostiAmount <= 0)) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepostiAmount; // breaks while loop is else statement runs.
        }
    }
};

const getNumberOfLines = () => {
    while (true){

        const lines = prompt("Enter the number of lines(1-3): ");
        const numberOfLines = parseFloat(lines);

        if ((isNaN(numberOfLines)) || (numberOfLines <= 0) || (numberOfLines > 3)) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines; // breaks while loop is else statement runs.
        }
    }
};

const getBet = (balance, lines) => {
    while (true){

        const bet = prompt("Enter the bet amount: ");
        const numberBet = parseFloat(bet);

        if ((isNaN(numberBet)) || (numberBet <= 0) || (numberBet > balance / lines)) {
            console.log("Invalid betting amount, try again.");
        } else {
            return numberBet; // breaks while loop is else statement runs.
        }
    }
}

let balance = deposit(); // let instead of const so that we can modify balance in future
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);


