function gameBoard () {
    let board = [[], 
                 [], 
                 []
                ]
    return board;
}   

function tictactoe () {

    const board = gameBoard();
    const player1 = new Player('Player1', 'O');
    const player2 = new Player('Player2', 'X');

    let currentPlayer = player1;
    
    function moveDisplay () {

        let gameboardDisplay = document.querySelector('.gameboard');
        let row = 0;
        let col = 0;

        gameboardDisplay.addEventListener('click', (e) => {
            const target = e.target;
            row = parseInt(target.dataset.row);
            col = parseInt(target.dataset.col);

            if (!target.innerHTML) {
                target.innerHTML  = currentPlayer.symbol;
                board[row][col] = currentPlayer.symbol;

                const result = logic(board, row, col, currentPlayer.symbol);

                if (result) {
                    alert(`Player: ${currentPlayer.name} has won!`);

                }
                else {
                    currentPlayer = (currentPlayer === player1) ? player2 : player1;
                    let flag = true;
                    for (let row of board) {
                        console.log(row)
                        for (let cell of row) {
                            console.log('cell: '+ cell)
                            if (cell === undefined) {
                                console.log(cell)
                                flag = false;
                            }
                            break;
                        }
                        if (!flag) break;
                    }
                    if (flag) {
                        alert('Tie!');
                    }
                }
            }

        })
    }
    moveDisplay();

}

const Player = function (name, symbol) {
    this.name = name;
    this.symbol = symbol;
}

// logic should comprise of 3 diff variants : 
// horizontal, vertical, diagonal
function logic (board, rowPlaced, colPlaced, playerMove) {
    
    // horizontal checks - check only that row placed
    // if whole row same = win.
    const boardHorizontal = board[rowPlaced];
    let horCheck = true;
    for (let i = 0; i < 3; i++) {
        if (boardHorizontal[i] !== playerMove) {
            horCheck = false; 
            break;
        }
    }

    // vertical checks - check only that vert placed
    // loop row, freeze colplaced
    let vertCheck = true;
    for (let i = 0; i < 3; i++) {
        if (board[i][colPlaced] !== playerMove) { 
            vertCheck = false; 
            break;
        }
    }
    
    // diagonal checks - check only the diagonal placed
    const diagonals = [[board[0][0], board[1][1], board[2][2]], 
                      [board[0][2], board[1][1], board[2][0]]]

    // return true if either diagonal has matches
    // checks if every placed moved on board is same as player's move.
    const diagonalCheck = diagonals.some(diagonal => 
                            diagonal.every(boardMove => boardMove === playerMove)
                        )

    return (horCheck || vertCheck || diagonalCheck);
}

tictactoe();