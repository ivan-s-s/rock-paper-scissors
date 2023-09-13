const arr = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let random = Math.floor(Math.random() * (arr.length))
    return arr[random]
}