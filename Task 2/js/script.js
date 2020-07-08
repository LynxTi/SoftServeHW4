'use strict'
function ticTacToeChecker (gameBoard) {
    let victoryCheck = false;
    let symbol;
    let checkEmptiness;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j<3; j++) {
        if (gameBoard[j][i] == 0) { 
            checkEmptiness = true;
        }
        switch (true) {
            case gameBoard[0][i] == gameBoard[1][i] == gameBoard[2][i]:
            case gameBoard[0][i] == gameBoard[1][i + 1] == gameBoard[2][i + 2]:
                symbol = gameBoard[0][i];
                victoryCheck = true;
                break;
            case gameBoard[0][i] == gameBoard[1][i - 1] == gameBoard[2][i - 2]:
                symbol = gameBoard[1][i - 1];
                victoryCheck = true;
                break;
            case gameBoard[j][i] == gameBoard[j][i + 1] == gameBoard[2][j + 2]:
                symbol = gameBoard[j][i];
                victoryCheck = true;
                break;
            default:
                break;
            
        }
    }
}

switch (true) {
    case symbol == 1 && victoryCheck:
        return 1;
        case symbol == 2 && victoryCheck:
            return 2;
        case !checkEmptiness:
            return 0; 

    default:
        return -1;
        break;
}


}

const someArr = [[2,0, 1], [2, 1, 2], [2, 2, 1]];
// const someArr = [[1, 2, 1], [2, 1, 2], [2, 1, 1]];

console.log(ticTacToeChecker(someArr));