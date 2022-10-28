let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
let playerTime = 0;
let symbols = ['O', 'X'];
const winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(position) {
    if (gameOver) return;

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        checkBoard();
        gameOver = isWin();

        playerTime = playerTime == 0 ? playerTime = 1 : playerTime = 0;
    }

    return gameOver;
}

function isWin() {
    for (let i in winState) {
        let sequence = winState[i];

        let pos0 = sequence[0];
        let pos1 = sequence[1];
        let pos2 = sequence[2];

        if (board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos0] != '') {
            return true;
        }
    }
    return false;
}

function newGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    game_over.innerHTML = ''
    resetButton.classList.remove('display-block');
    squares.forEach(square => {
        square.innerHTML = ''
    })
}