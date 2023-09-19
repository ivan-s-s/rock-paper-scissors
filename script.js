let round = 1;
let wins = 0;
let los = 0;

const audio = document.querySelector('.sound');
const click = document.querySelector('.click');

const startBtn = document.querySelector('.container_start');
const overlay = document.querySelector('.overlay_bg');

const tablo = document.querySelector('.rounds');
const showTextTablo = document.querySelector('.showTablo');

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const restartBtn = document.querySelector('.restart');

const playerIcon = document.getElementById('player_icon');
const computerIcon = document.getElementById('computer_icon');

const playerScore = document.querySelector('.player_score');
const computerScore = document.querySelector('.computer_score');

const computerShow = document.getElementById('computer_choice');
const playerShow = document.getElementById('player_choice');

/* Start Game */
startBtn.addEventListener('mousedown', () => {
    click.currentTime = 0.07;
    click.play();
})
startBtn.addEventListener('click', () => {
    startBtn.classList.add('active');
    overlay.classList.add('active');
    tablo.innerHTML = `Round: ${round}`;

    showTextTablo.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.5)' }
        ],
        {
            duration: 1000,
            iterations: 4,
            direction: 'alternate'
        }
    );
})

/* First Round */
playerScore.innerHTML = `Player: ${wins}`;
computerScore.innerHTML = `Computer: ${los}`;

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * (arr.length))
    return arr[random]
}

const arr = [rockBtn, paperBtn, scissorsBtn, restartBtn];
arr.forEach((button) => {
    button.addEventListener('mousedown', () => {
        audio.currentTime = 0.02;
        audio.play();
    })
})
arr.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.value);
    })
})


function playRound(player, computer) {
    round += 1;
    if (player == computer) {
        showTextTablo.textContent = 'Game Draw';
        showTextTablo.animate(
            [
                { transform: 'scale(1)' },
                { transform: 'scale(1.5)' }
            ],
            {
                duration: 1000,
                iterations: 2,
                direction: 'alternate'
            }
        );
        playerIcon.style.border = '4px solid var(--dark-color)';
        computerIcon.style.border = '4px solid var(--dark-color)';
    } else if (player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock') {
        wins += 1;
        showTextTablo.innerHTML = `You Win! ${player} beats ${computer}`;
        showTextTablo.animate(
            [
                { transform: 'scale(1)' },
                { transform: 'scale(1.5)' }
            ],
            {
                duration: 1000,
                iterations: 2,
                direction: 'alternate'
            }
        );
        playerScore.innerHTML = `Player: ${wins}`;
        playerIcon.style.border = '4px solid #3b6138';
        computerIcon.style.border = '4px solid var(--dark-color)';
    } else {
        los += 1;
        showTextTablo.textContent = `You Lose! ${player} beats ${computer}`;
        showTextTablo.animate(
            [
                { transform: 'scale(1)' },
                { transform: 'scale(1.5)' }
            ],
            {
                duration: 1000,
                iterations: 2,
                direction: 'alternate'
            }
        );
        computerScore.innerHTML = `Computer: ${los}`;
        playerIcon.style.border = '4px solid var(--dark-color)';
        computerIcon.style.border = '4px solid #3b6138';
    }
}

function getIcon(playerPic, computerPic) {
    switch (playerPic) {
        case 'rock':
            playerShow.innerHTML = '<i class="fa-solid fa-hand-back-fist">'
            break
        case 'paper':
            playerShow.innerHTML = '<i class="fa-solid fa-hand"></i>'
            break
        case 'scissors':
            playerShow.innerHTML = '<i class="fa-solid fa-hand-peace"></i>'
            break
    }

    switch (computerPic) {
        case 'rock':
            computerShow.innerHTML = '<i class="fa-solid fa-hand-back-fist">'
            break
        case 'paper':
            computerShow.innerHTML = '<i class="fa-solid fa-hand"></i>'
            break
        case 'scissors':
            computerShow.innerHTML = '<i class="fa-solid fa-hand-peace"></i>'
            break
    }
}

function game(playerChoice) {
    switch (playerChoice) {
        case 'restart':
            round = 1;
            wins = 0;
            los = 0;
            reset();
            break
        default:
            tablo.innerHTML = `Round: ${round}`;
            const computerSelection = getComputerChoice();
            playRound(playerChoice, computerSelection)
            getIcon(playerChoice, computerSelection)
            break
    }
}

function reset() {
    tablo.innerHTML = `Round: ${round}`;
    playerShow.innerHTML = '<i class="fa-solid fa-question">'
    computerShow.innerHTML = '<i class="fa-solid fa-question">'
    playerScore.innerHTML = `Player: ${wins}`;
    computerScore.innerHTML = `Computer: ${los}`;
    showTextTablo.textContent = 'Choose!';
    showTextTablo.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.5)' }
        ],
        {
            duration: 1000,
            iterations: 4,
            direction: 'alternate'
        }
    );
}