var humanScore = 0;
var computerScore = 0;
var gameLength = 5;

function getComputerChoice(){
    var choice = Math.random();
    console.log(choice);
    if (choice <= 0.3333){
        action = "rock";
    }
    else if (choice <= 0.6666){
        action = "scissors";
    }
    else{
        action = "paper";
    }
    console.log(action);
    return action;
}

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
    })
    paperBtn.addEventListener('click', () => {
        computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
    })
    scissorsBtn.addEventListener('click', () => {
        computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
    })

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert(humanChoice + " vs " + computerChoice + ". Its a tie!");
        humanScore += 1;
    }
    else if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")) {
        alert(humanChoice + " vs " + computerChoice + ". You win!")
    }
    else{
        alert(humanChoice + " vs " + computerChoice + ". You Lose.")
        computerScore += 1;
    }
}

