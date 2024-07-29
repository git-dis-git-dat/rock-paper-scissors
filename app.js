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

    let score = document.querySelector("#score");
    let roundResults = document.querySelector("#round-results");

    function scoreRoundUpdate(){
        
    }

    function playRound(humanChoice, computerChoice) {
    // round logic
        if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}` + ". You rolled " + `${humanChoice}` + "You win!";
            return
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}` + ". You rolled " + `${humanChoice}` + "You win!";
            return
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}` + ". You rolled " + `${humanChoice}` + "You win!";
            return
        } else if (humanChoice === computerChoice){
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}`+ ". You rolled " + `${humanChoice}` + ". It's a tie :O"
            return
        } else {
            computerScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}`+ ". You rolled " + `${humanChoice}` + ". Computer wins!"
            return 
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
