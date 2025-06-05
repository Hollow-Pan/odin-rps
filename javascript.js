let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");
const res = document.querySelector(".res");

const result1 = document.createElement("div");
const result2 = document.createElement("div");
const winner = document.createElement("div");

result1.classList.add("result");
result2.classList.add("result");
winner.classList.add("winner");

res.appendChild(result1);
res.appendChild(result2);
res.appendChild(winner);

// styling
container.style.cssText = "display:flex;gap:16px;justify-content:center;margin:32px 0px";
res.style.cssText = "display:flex; flex-direction:column; gap:6px;align-items:center";


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

function getHumanChoice(event){
    return event.target.className.toUpperCase();
}

function winCond(str){
    winner.textContent = str + "WIN";
    winner.textContent += (str === "YOU ") ? " " : "S ";
    winner.textContent += "THE GAME!";
}

function humanWins(human, computer){
    humanScore++;
    if(humanScore === 5){
        winCond("YOU ");
        buttons.forEach((btn) => btn.removeEventListener("click", playRound));
    }
    result1.textContent = "You win! " + human + " beats " + computer;
    result2.textContent = "YOU: " + humanScore + ", COMPUTER: " + computerScore;
}

function computerWins(human, computer){
    computerScore++;
    if(computerScore === 5){
        winCond("COMPUTER ");
        buttons.forEach((btn) => btn.removeEventListener("click", playRound));
    }
    result1.textContent = "You lose! " + human + " loses to " + computer;
    result2.textContent = "YOU: " + humanScore + ", COMPUTER: " + computerScore;
}

function tie(human, computer){
    result1.textContent = "Its a tie! " + human + " and " + computer + " is a draw.";
    result2.textContent = "YOU: " + humanScore + ", COMPUTER: " + computerScore;
}

function playRound(event){
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();
    event.preventDefault();

    if ((humanChoice==="ROCK" && computerChoice==="PAPER") || (humanChoice==="PAPER" && computerChoice==="SCISSORS") || (humanChoice==="SCISSORS" && computerChoice==="ROCK")) computerWins(humanChoice, computerChoice);
    else if ((humanChoice==="PAPER" && computerChoice==="ROCK") || (humanChoice==="SCISSORS" && computerChoice==="PAPER") || (humanChoice==="ROCK" && computerChoice==="SCISSORS")) humanWins(humanChoice, computerChoice);
    else tie(humanChoice, computerChoice);
}

let buttons = Array.from(document.querySelectorAll(".container button"));
buttons.forEach((btn) => btn.addEventListener("click", playRound));