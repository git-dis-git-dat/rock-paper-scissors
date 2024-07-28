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
        return choice
    });
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    // round logic
        if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("nice! " + `${humanChoice}` + " beats " + `${computerChoice}`)
            return humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("nice! " + `${humanChoice}` + " beats " + `${computerChoice}`)
            return humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("nice! " + `${humanChoice}` + " beats " + `${computerChoice}`)
            return humanScore++;
        } else if (humanChoice === computerChoice){
            console.log("Tie")
            return
        } else {
            console.log("try again! " + `${computerChoice}` + " beats " + `${humanChoice}`)
            return computerScore++;
        }
    }

    let roundCount = 0;

    // while (roundCount < 5) {
    //     roundCount++
    //     playRound(getHumanChoice(), getComputerChoice());
    // }
}



playGame();
// getHumanChoice();
// rock > scissors
// paper > rock
// scissors > paper
// else its a tie