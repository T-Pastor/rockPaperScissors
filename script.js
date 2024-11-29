let computerWins = 0;
let humanWins = 0;
let draws = 0;

//determines the computer players choice
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

//uses the ID of the button clicked to determine the human players choice
function buttonAction(event) {
    let target = event.target;
    let id = target.id;

    switch(id) {
        case "rock":
            winner(0);
            break;
        case "paper":
            winner(1);
            break;
        case "scissors":
            winner(2);
            break;
        case "reset":
            computerWins = 0;
            humanWins = 0;
            draws = 0;
            game = 0;
            break;
        default:
            alert("What are you doing?");
            break;
    }
}

//determines winner
function winner(humanChoice) {
    let sum = parseInt(getComputerChoice()) - parseInt(humanChoice);

    if (getWinner(computerWins, humanWins)) {
        if (sum == 0) {
            alert("You tied!");
            draws++;
        } else if (sum == -1 || sum == 2) {
            alert("You win");
            humanWins++;
            getWinner(computerWins, humanWins);
        } else if (sum == 1 || sum == -2) {
            alert("You lose, please try again");
            computerWins++;
            getWinner(computerWins, humanWins);
        }
    }
}

 //tracks amount of wins for each player, when a player has 5 wins, the game ends
 function getWinner(cWins, hWins) {
    if (cWins == 5) {
        alert("The computer has 5 wins! The computer wins! Please press reset to play again.");
        return 0;
    } else if (hWins == 5){
        alert("You have 5 wins! You win! Please press reset to play again.");
        return 0;
    } else {
        return 1;
    }
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