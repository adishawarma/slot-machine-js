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



deposit();
