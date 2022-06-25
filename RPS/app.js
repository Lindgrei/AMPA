const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userPointsDisplay = document.getElementById('user-point')
const computerPointsDisplay = document.getElementById('computer-point')

let userChoice
let computerChoice
let userPoints = 0
let computerPoints = 0


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getresult();
}));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    else if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


function getresult() {
    if (computerChoice === userChoice) {

        result = "it's a draw!";
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost!";
        computerPoints++;
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win!";
        userPoints++
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win!";
        userPoints++;
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost!";
        computerPoints++;
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win!";
        userPoints++;
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost!";
        computerPoints++;
    }
    resultDisplay.innerHTML = result;
    computerPointsDisplay.innerHTML = computerPoints;
    userPointsDisplay.innerHTML = userPoints;
};
