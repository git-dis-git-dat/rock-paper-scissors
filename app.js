"use strict"

function getComputerChoice(){

    const number = Math.floor(Math.random() * 3)
    let roll = "";

    if (number === 0){
        roll = "rock";
    } else if (number === 1){
        roll = "paper"
    } else {
        roll = "scissors"
    }

    return roll;
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;    

    let results = document.querySelector("#results");

    function playRound(humanChoice, computerChoice) {
    // round logic
        if (humanChoice === "rock" && computerChoice === "scissors"){
            results.textContent = "nice! " + `${humanChoice}` + " beats " + `${computerChoice}`;
            return humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            results.textContent = "nice! " + `${humanChoice}` + " beats " + `${computerChoice}`;
            return humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            results.textContent = "nice! " + `${humanChoice}` + " beats " + `${computerChoice}`;
            return humanScore++;
        } else if (humanChoice === computerChoice){
            results.textContent = "Tie";
            return
        } else {
            results.textContent = "try again! " + `${computerChoice}` + " beats " + `${humanChoice}`;
            return computerScore++;
        }
    }

    function getHumanChoice(){

        const container = document.querySelector("#container");
        let choice = "";
    
        container.addEventListener("click", (e)=>{
        let target = e.target;
    
            switch(target.id){
                case "rock":
                    choice = target.id;
                    break
                case "paper":
                    choice = target.id;
                    break
                case "scissors":
                    choice = target.id;
            }
            return playRound(choice, getComputerChoice());
        });
    }
    getHumanChoice();
}

playGame();
