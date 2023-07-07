const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result; 

possibleChoices.forEach(Choices => Choices.addEventListener("click",(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomChoices = Math.floor(Math.random() * possibleChoices.length)+1;
    // console.log(randomChoices);

    if(randomChoices === 1) {
        computerChoice = 'rock';
    }

    if(randomChoices === 2) {
        computerChoice = 'paper';
    }

    if(randomChoices === 3) {
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
            result = "Tie, how can you be this useless :o";
    }

    else if(computerChoice === 'rock' && userChoice==='paper' || computerChoice === 'rock' && userChoice==='paper' || computerChoice === 'paper' && userChoice==='scissors'){
        result = "You won but neighbor's son won 3 times in a row :(";
    }
    else {
        result = "Lost in a simple clicking game, eh?";
    }
    resultDisplay.innerHTML = result;
    }