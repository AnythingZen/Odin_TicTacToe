function gameBoard () {

}

function tictactoe () {

// board is 2d array, meaning 3 rows 3 cols
    let board = [[],
                 [], 
                 []];
// when user places, log down the row & column its placed
const player1 = new Player()
const player2 = new Player()
// it then checks logic to see if it works.

}
// when box is pressed, 1. show O/X 
// 2. log as first players value. Moves then alternates between X and O
// player object is created to store the row and col
// use each of the object to update gameBoard (prototype) -- if gameboard already has logged value, dont allow user to replace
// check logic
// display win 
const Player = function (row, col) {
    this.row = row;
    this.col = col;
}

// logic should comprise of 3 diff variants : 
// horizontal, vertical, diagonal
function logic (board, rowPlaced, colPlaced, playerMove) {
    
    // horizontal checks - check only that row placed
    // if whole row same = win.
    const boardHorizontal = board[rowPlaced];
    const horCheck = boardHorizontal.every(rowMove => rowMove === playerMove)

    // vertical checks - check only that vert placed
    // loop row, freeze colplaced
    const vertCheck = board.every(vertMove => board[vertMove][colPlaced] === playerMove)

    // diagonal checks - check only the diagonal placed
    const diagonals = [[board[0][0], board[1][1], board[2][2]], 
                      [board[0][2], board[1][1], board[2][0]]]

    // return true if either diagonal has matches
    // checks if every placed moved on board is same as player's move.
    const diagonalCheck = diagonals.some(diagonal => 
                            diagonal.every(boardMove => boardMove === playerMove)
                        )

    return (horCheck || vertCheck || diagonalCheck) ? 0 : 1;
}
