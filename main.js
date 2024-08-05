function playGame() {
    const CHOICES = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        return CHOICES[Math.floor(Math.random() * CHOICES.length)];
    }

    function getHumanChoice() {
        let userInput = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
        while (!CHOICES.includes(userInput)) {
            userInput = prompt("Invalid choice.\nEnter your choice (rock, paper, scissors): ").toLowerCase();
        }
        return userInput;
    }

    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${capitalize(humanChoice)}\nComputer chose: ${capitalize(computerChoice)}`);

        if (humanChoice === computerChoice) {
            console.log(`Tie! You and the computer both chose ${capitalize(humanChoice)}.`);
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
        }
        else {
            computerScore++;
            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
        }

        console.log(`\nUser Score: ${humanScore}\nComputer Score: ${computerScore}`);
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
}