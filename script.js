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
    const humScr = document.querySelector(".playerScore");
    const cmpScr = document.querySelector(".computerScore")
    const battleFeed = document.querySelector(".battleFeed")
    const battleFeedEntry = document.createElement('li');

    if (humanChoice === computerChoice){
        battleFeedEntry.textContent = humanChoice + " vs " + computerChoice + ". Its a tie!";
    }
    else if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")) {
        battleFeedEntry.textContent = (humanChoice + " vs " + computerChoice + ". You win!");
        humanScore += 1;
    }
    else{
        battleFeedEntry.textContent = (humanChoice.toString() + " vs " + computerChoice.toString() + ". You lose.");
        computerScore += 1;
    }
    battleFeed.appendChild(battleFeedEntry);
    humScr.textContent = "Player: " + humanScore.toString();
    cmpScr.textContent = "Computer: " + computerScore.toString();
}

