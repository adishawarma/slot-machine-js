const prompt = require("prompt-sync")();


// global variables (all caps)
const ROWS = 3;
const COLS = 3;

// Objects in js
const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


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

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = []; //column inside slot machine

    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbols = reelSymbols[randomIndex];
            reels[i].push(selectedSymbols);
            reelSymbols.splice(randomIndex, 1); // 1 -> remove one (1) element
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            } 
        }
        console.log(rowString);
    }
};

let balance = deposit(); // let instead of const so that we can modify balance in future
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);




