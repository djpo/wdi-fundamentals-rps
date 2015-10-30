////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
/*
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
*/

'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var choice = prompt();
    while ((choice !== 'rock') && (choice !== 'paper') &&(choice !== 'scissors')) {
        console.log("Not a valid input. Try again.");
        choice = prompt();
    }
    return choice;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == computerMove) {
        winner = 'tie';
    } else {
        switch (playerMove) {
            case 'rock':
                if (computerMove == 'paper') {
                    winner = 'computer';
                } else {
                    winner = 'player';
                }
                break;
            case 'paper':
                if (computerMove == 'scissors') {
                    winner = 'computer';
                } else {
                    winner = 'player';
                }
                break;
            case 'scissors':
                if (computerMove == 'rock') {
                    winner = 'computer';
                } else {
                    winner = 'player';
                }
                break;
        }
    }
    return winner;
}

function playOneRound() {
    var playerMove = getPlayerMove();
    console.log("player move: " + playerMove);
    var computerMove = getComputerMove();
    console.log("computer move: " + computerMove);
    console.log("_________________________\nround winner: " + getWinner(playerMove, computerMove).toUpperCase());
    return getWinner(playerMove, computerMove);
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!\n");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var winner = playOneRound();
        if (winner == 'player') {
            playerWins += 1;
        } else if (winner == 'computer') {
            computerWins += 1;
        }
        console.log("\n**********SCORE**********\n" + "Player: " + playerWins + "\nComputer: " + computerWins + "\n*************************");
        if (playerWins == 5) {
            console.log("_________________________\nPLAYER WINS THE GAME!");
        } else if (computerWins == 5) {
            console.log("_________________________\nCOMPUTER WINS THE GAME!");
        } else {
            console.log("Let's play another round.\n\n");
        }
    }
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors!\n");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        var winner = playOneRound();
        if (winner == 'player') {
            playerWins += 1;
        } else if (winner == 'computer') {
            computerWins += 1;
        }   
        console.log("\n**********SCORE**********\n" + "Player: " + playerWins + "\nComputer: " + computerWins + "\n*************************"); 
        if (playerWins == x) {
            console.log("_________________________\nPLAYER WINS THE GAME!");
        } else if (computerWins == x) {
            console.log("_________________________\nCOMPUTER WINS THE GAME!");
        } else {
            console.log("Let's play another round.\n\n");
        }
    }
    return [playerWins, computerWins];
}