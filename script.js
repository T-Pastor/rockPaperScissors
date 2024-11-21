console.log("Hello World");

function getComputerChoice() {
    return Math.random() * (3.01 - 0);
}

function rockPaperScissors(num) {
    if (num >= 0 && num < 1 ) {
        return "The computer chose Rock";
    } else if (num >= 1 && num < 2) {
        return "The computer chose Paper";
    } else {
        return "The computer chose Scissors";
    }
}

console.log(rockPaperScissors(getComputerChoice()));

