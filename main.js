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
        let roundInfo = `You: ${capitalize(humanChoice)}\nComputer: ${capitalize(computerChoice)}\n`

        if (humanChoice === computerChoice) {
            roundInfo += `Tie! You and the computer both chose ${capitalize(humanChoice)}.`;
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            roundInfo += `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
        }
        else {
            computerScore++;
            roundInfo += `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
        }

        alert(roundInfo);
        alert(`User Score: ${humanScore}\nComputer Score: ${computerScore}`);
    }

    alert("Welcome to Rock Paper Scissors!\nFirst to win 3 rounds wins the game.")

    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    humanScore > computerScore ? alert("Congratulations, you are the winner of this game!") : alert("The computer is the winner of this game.");
}

playGame();