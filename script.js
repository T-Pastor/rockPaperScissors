let computerWins = 0;
let humanWins = 0;
let draws = 0;

function getComputerChoice() {
    let choice = Math.random() * (3.01 - 0);

    if (choice >= 0 && choice < 1 ) {
        return 0; //rock
    } else if (choice >= 1 && choice < 2) {
        return 1; //paper
    } else {
        return 2; //scissors
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?", "").toLowerCase();

    switch(choice) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
        default: 
            alert("Please enter rock, paper, or scissors!");
            getHumanChoice();
    }
}

function winner(humanChoice) {
    let sum = parseInt(getComputerChoice()) - parseInt(humanChoice);

    if (sum == 0) {
        alert("You tied!");
        draws++;
    } else if (sum == -1 || sum == 2) {
        alert("You win");
        humanWins++;
    } else if (sum == 1 || sum == -2) {
        alert("You lose, please try again");
        computerWins++;
    }
}

function reset() {
    computerWins = 0;
    humanWins = 0;
    draws = 0;
} 

function getWins() {
    return humanWins;
}

function getLosses() {
    return computerWins;
}

function getTies() {
    return draws;
}