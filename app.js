"use strict"

function getComputerChoice(){
    // return r, p, or s using math.random and console log it
    const number = Math.floor(Math.random() * 3)
    let roll = '';

    if (number === 0){
        roll = 'rock';
    } else if (number === 1){
        roll = 'paper'
    } else {
        roll = 'scissors'
    }
    
    return console.log(roll);
}

function getHumanChoice(){
    // get r, p, or s from user via prompt and return it, and console log it
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    /*
        round logic

        humanChoice should be case insensitive

        console.log round winner

        increment humanScore or computerScore based on round winner
    */
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    //move playRound() in here and score variables
    //5 found game
}