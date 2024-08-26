const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let headingDiv = document.querySelector('.heading');
let humanChoiceDiv = document.querySelector('.humanChoice');
let computerChoiceDiv = document.querySelector('.computerChoice');
let roundWinnerDiv = document.querySelector('.roundWinner');
let humanScoreDiv = document.querySelector('.humanScore');
let computerScoreDiv = document.querySelector('.computerScore');
let gameWinnerDiv = document.querySelector('.gameWinner');

let buttons = document.querySelector('.buttons');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

let playRock = function () {
    playRound('rock', getComputerChoice());
};
let playPaper = function () {
    playRound('paper', getComputerChoice());
};
let playScissors = function () {
    playRound('scissors', getComputerChoice());
};


function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function playRound(humanChoice, computerChoice) {
    humanChoiceDiv.textContent = `You: ${capitalize(humanChoice)}`
    computerChoiceDiv.textContent = `Computer: ${capitalize(computerChoice)}\n`

    if (humanChoice === computerChoice) {
        roundWinnerDiv.textContent = `Tie!`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        roundWinnerDiv.textContent = `You win!`;
    }
    else {
        computerScore++;
        roundWinnerDiv.textContent = `You lose!`;
    }

    humanScoreDiv.textContent = `Your Score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (humanScore < 5 && computerScore < 5) return; 

    if (humanScore == 5) {
        gameWinnerDiv.textContent = 'Congratulations! You won the game.';
    }
    else {
        gameWinnerDiv.textContent = 'The computer won the game. Better luck next time!';
    }
    rockBtn.removeEventListener('click', playRock);
    paperBtn.removeEventListener('click', playPaper);
    scissorsBtn.removeEventListener('click', playScissors);
    return;
}

rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissors);