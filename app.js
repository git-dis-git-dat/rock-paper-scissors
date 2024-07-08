"use strict"

function getComputerChoice(){
    // return r, p, or s using math.random and console log it
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
    // get r, p, or s from user via prompt and return it, and console log it
    const choice = prompt("Rock, Paper, or Scissors?", "")
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

    // console.log round winner

    // increment humanScore or computerScore based on round winner
    
}

playRound(humanSelection, computerSelection);

function playGame(){
    //move playRound() in here and score variables
    //5 found game
}


// rock > scissors
// paper > rock
// scissors > paper
// else its a tie