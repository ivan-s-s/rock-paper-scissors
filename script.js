let round = 0;
let wins = 0;
let los = 0;
let game_draw = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const playerScore = document.querySelector('.player_score');
const computerScore = document.querySelector('.computer_score');

playerScore.innerHTML = `Player: ${wins}`;
computerScore.innerHTML = `Computer: ${los}`;


/* Start */

const startBtn = document.querySelector('.container_start');
const overlay = document.querySelector('.overlay_bg');
const audio = document.querySelector('audio')
startBtn.addEventListener('click', () => {
    startBtn.classList.add('active');
    overlay.classList.add('active');
    audio.play()
})

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * (arr.length))
    return arr[random]
}

const arr = [rockBtn, paperBtn, scissorsBtn];
arr.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.value);
        audio.play();
    })
})


function playRound(player, computer) {
    round += 1;
    if (player == computer) {
        game_draw += 1;
    } else if (player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock') {
        wins += 1;
    } else {
        los += 1;
    }
}

function getIcon(pic) {
    switch (pic) {
        case 'rock':
            return 'rock'
        case 'paper':
            return '<i class="fa-solid fa-hand"></i>'
        case 'scissors':
            return '<i class="fa-solid fa-hand-peace"></i>'
    }
}


function game(playerChoice) {
    const computerShow = document.querySelector('computer_choice');
    const computerSelection = getComputerChoice();

    playRound(playerChoice, computerSelection)

    computerShow.innerHTML = getIcon(computerSelection);
    console.clear()
    console.log(`Round: %c${round}`, 'background-color: lightblue;font-size:18px;')
    console.log(`Wins: %c${wins}`, 'background-color: lightgreen;font-size:18px;')
    console.log(`Game Draw: %c${game_draw}`, 'background-color: lightgray;font-size:18px;')
    console.log(los)
}

function render() {
    document.querySelector('.player_score').innerHTML = 'Player: 0';
    document.querySelector('.computer_score').innerHTML = 'Computer: 0';
}