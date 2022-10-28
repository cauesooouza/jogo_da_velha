const squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('.reset');
const game_over = document.querySelector('.game-over');

window.addEventListener('DOMContentLoaded', () => {
    squares.forEach(square => square.addEventListener('click', handleClick))
})

function handleClick(e) {
    let position = e.target.id;
    if (handleMove(position)) {
        resetButton.classList.add('display-block');
        game_over.innerHTML = `Jogo finalizado, o ganhador foi o player ${playerTime+1}`
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `${symbol}`
}   

function checkBoard() {
    let checkBoard = board.filter(square => square == '')
    if (!gameOver && checkBoard.length == 0) {
        gameOver = true;
        resetButton.classList.add('display-block');
        game_over.innerHTML = `Deu velha!`
        resetButton.innerHTML = 'Tente Novamente';
    } else {
        resetButton.innerHTML = 'Novo game';
    }
}