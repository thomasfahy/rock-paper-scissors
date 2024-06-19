var humanScore = 0;
var computerScore = 0;

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
getComputerChoice()

function getHumanChoice(){
    var userChoice = prompt("Please choose: 'rock' 'paper' or 'scissors'");
    return userChoice;
}
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert(humanChoice + " vs " + computerChoice + " Its a tie!");
    }
    else if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")) {
        alert(humanChoice + " vs " + computerChoice + ". You win!")
    }
    else{
        alert(humanChoice + " vs " + computerChoice + ". You Lose.")
    }
}

playRound(getHumanChoice(),getComputerChoice());