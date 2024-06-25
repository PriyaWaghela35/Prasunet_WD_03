let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementById(`b${index}`).value = currentPlayer;
        document.getElementById(`b${index}`).disabled = true;
        if (checkWin()) {
            document.getElementById('print').innerHTML = `Player ${currentPlayer} won`;
            disableAll();
        } else if (board.every(cell => cell !== "")) {
            document.getElementById('print').innerHTML = "Match Tie";
        } else {
            currentPlayer = currentPlayer === "X" ? "0" : "X";
            updateTurnIndicator();
            document.getElementById('print').innerHTML = `Player ${currentPlayer} Turn`;
        }
    }
}

function checkWin() {
    return winConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

function disableAll() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`b${i}`).disabled = true;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    for (let i = 0; i < 9; i++) {
        document.getElementById(`b${i}`).value = "";
        document.getElementById(`b${i}`).disabled = false;
    }
    updateTurnIndicator();
    document.getElementById('print').innerHTML = "Player X Turn";
}

function updateTurnIndicator() {
    if (currentPlayer === "X") {
        document.getElementById('turnX').style.backgroundColor = '#3498db';
        document.getElementById('turnO').style.backgroundColor = '#2c3e50';
    } else {
        document.getElementById('turnX').style.backgroundColor = '#2c3e50';
        document.getElementById('turnO').style.backgroundColor = '#e74c3c';
    }
}

// Initial call to set the turn indicator correctly
updateTurnIndicator();
