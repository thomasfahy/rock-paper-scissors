function getComputerChoice(){
    choice = Math.random();
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