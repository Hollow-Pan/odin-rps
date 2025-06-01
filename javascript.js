let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    switch(num){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getHumanChoice(){
    let ans = prompt("Choose! Rock, Paper, or Scissors?");
    return ans.toUpperCase();
}

function humanWins(human, computer){
    humanScore++;
    console.log("You win! " + human + " beats " + computer);
    console.log("YOU: " + humanScore + ", COMPUTER: " + computerScore);
}

function computerWins(human, computer){
    computerScore++;
    console.log("You lose! " + human + " loses to " + computer);
    console.log("YOU: " + humanScore + ", COMPUTER: " + computerScore);
}

function tie(human, computer){
    console.log("Its a tie! " + human + " and " + computer + " is a draw.");
    console.log("YOU: " + humanScore + ", COMPUTER: " + computerScore);
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if ((humanChoice==="ROCK" && computerChoice==="PAPER") || (humanChoice==="PAPER" && computerChoice==="SCISSORS") || (humanChoice==="SCISSORS" && computerChoice==="ROCK")) computerWins(humanChoice, computerChoice);
    else if ((humanChoice==="PAPER" && computerChoice==="ROCK") || (humanChoice==="SCISSORS" && computerChoice==="PAPER") || (humanChoice==="ROCK" && computerChoice==="SCISSORS")) humanWins(humanChoice, computerChoice);
    else tie(humanChoice, computerChoice);
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log(humanScore > computerScore ? "Congratulations, you win!" : "Oof, better luck next time!");
}

playGame();