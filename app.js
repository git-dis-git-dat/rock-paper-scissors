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
    let gameResult = document.querySelector("#game-result");

    function scoreRoundUpdate(){
        
    }

    function playRound(humanChoice, computerChoice) {
    // round logic
        if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}` + ". You rolled " + `${humanChoice}` + ". You win!";
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}` + ". You rolled " + `${humanChoice}` + ". You win!";
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}` + ". You rolled " + `${humanChoice}` + ". You win!";
        } else if (humanChoice === computerChoice){
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}`+ ". You rolled " + `${humanChoice}` + ". It's a tie :O"
        } else {
            computerScore++;
            score.textContent = "You: " + `${humanScore}` + " | Computer: " + `${computerScore}`;
            roundResults.textContent = "Computer rolled " + `${computerChoice}`+ ". You rolled " + `${humanChoice}` + ". Computer wins!"
        }

        // game win logic
        if (humanScore === 5){
            gameResult.textContent = "You win the game!"
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5){
            gameResult.textContent = "Computer wins the game!"
            humanScore = 0;
            computerScore = 0;
        } else {
            gameResult.textContent = "";
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
            playRound(choice, getComputerChoice());
        });
    }
    getHumanChoice();
}

playGame();
