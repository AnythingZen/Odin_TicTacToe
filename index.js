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

const Player = function (row, col) {
    this.row = row;
    this.col = col;
}


// logic should comprise of 3 diff variants : 
// horizontal, vertical, diagonal
function logic (board, rowPlaced, colPlaced, playerMove) {
    
    const boardHorizontal = board[rowPlaced];
    // horizontal checks - check only that row placed
    // if whole row same = win.
    for (const horValue of boardHorizontal) {
        if (horValue !== playerMove) {
            return 1;
        }
    }

    // vertical checks - check only that vert placed
    // loop row, freeze colplaced
    for (let row = 0; row < 3; row++ ) {
        const boardVert = board[row][colPlaced];
        if (playerMove !== boardVert) {
            return 1;
        }
    }

    // diagonal checks - check only the diagonal placed

    // remove non diagonals
    if (((rowPlaced == 0 || rowPlaced == 2) && colPlaced == 1) ||
        (rowPlaced == 1 && (colPlaced == 0 || colPlaced == 2))) {
            return 1;
        }

    // check right diagonals
    for (let row = 0; row < 3; row++) {  

        const boardPlaced = board[row][row];
        if (playerMove !== boardPlaced) {
            return 1;
        } 
    }
    
    // check left diagonals
    let col = 2;
    for (let row = 0; row < 3; row++) {

        const boardPlaced = board[row][col];
        if (playerMove !== boardPlaced) {
            return 1;
        }
        col--;
    }

    return 0;
}
