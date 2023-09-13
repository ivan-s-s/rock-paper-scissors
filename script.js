let round = 0;
let wins = 0;
let los = 0;
let game_draw = 0;

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * (arr.length))
    return arr[random]
}

function getPlayerChoice() {
    let playerChoice;
    while (playerChoice !== 'rock' || playerChoice !== 'paper' || playerChoice !== 'scissors') {
        playerChoice = prompt('Choose: rock, paper, scissors').toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            break
        }
    }
    return playerChoice;
}

function playRound(player, computer) {
    if (player == computer) {
        game_draw += 1;
        return alert(`Player: ${player} \nComputer: ${computer} \nGame Draw`);
    } else if (player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock') {
        wins += 1;
        return alert(`Player: ${player} \nComputer: ${computer} \nYou Win! ${player[0].toUpperCase() + player.slice(1)} beats ${computer[0].toUpperCase() + computer.slice(1)}`);
    } else {
        los += 1;
        return alert(`Player: ${player} \nComputer: ${computer} \nYou Lose! ${player[0].toUpperCase() + player.slice(1)} beats ${computer[0].toUpperCase() + computer.slice(1)}`)
    }
}



function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        round += 1;
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice()
        playRound(playerSelection, computerSelection)
        console.clear()
        console.log(`Round: %c${round} of ${rounds}`, 'background-color: lightblue;font-size:18px;')
        console.log(`Wins: %c${wins}`, 'background-color: lightgreen;font-size:18px;')
        console.log(`Game Draw: %c${game_draw}`, 'background-color: lightgray;font-size:18px;')
        showBoxOfResults()
    }
}

const getNumerOfRounds = parseInt(prompt('Choose amount of rounds you want to play...'))
game(getNumerOfRounds);


function showBoxOfResults() {
    let numberOfRounds = document.getElementById('rounds_container');
    numberOfRounds.innerText = `${round}`;

    let playerWins = document.getElementById('playerWins_container')
    playerWins.innerText = `${wins}`;

    let computerWins = document.getElementById('computerWins_container')
    computerWins.innerText = `${los}`;

    let gameDraw = document.getElementById('gameDraw_container')
    gameDraw.innerText = `${game_draw}`;
}