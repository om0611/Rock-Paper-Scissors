const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let welcomeDiv = document.querySelector('.welcome');
let humanChoiceDiv = document.querySelector('.humanChoice');
let computerChoiceDiv = document.querySelector('.computerChoice');
let roundWinnerDiv = document.querySelector('.roundWinner');
let humanScoreDiv = document.querySelector('.humanScore');
let computerScoreDiv = document.querySelector('.computerScore');
let gameWinnerDiv = document.querySelector('.gameWinner');

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');


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
        roundWinnerDiv.textContent = `Tie! You and the computer both chose ${capitalize(humanChoice)}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        roundWinnerDiv.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
    }
    else {
        computerScore++;
        roundWinnerDiv.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
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
    welcomeDiv.remove();
    humanChoiceDiv.remove();
    computerChoiceDiv.remove();
    roundWinnerDiv.remove();
    humanScoreDiv.remove();
    computerScoreDiv.remove();
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    return;
}

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});