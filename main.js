const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice (rock, paper, scissors): ");
    while (!CHOICES.includes(userInput)) {
        userInput = prompt("Invalid choice.\nEnter your choice (rock, paper, scissors): ");
    }
    return userInput;

}

console.log(getComputerChoice());
console.log(getHumanChoice());