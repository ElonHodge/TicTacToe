const shapeX = "images/shapeX.svg";
const shapeO = "images/shapeO.svg";
let playerTurn = 0;
let boardPosition = 0;
let inputShapeArray = [];
let playerMovesArray = [];
let textBanner = document.getElementsByTagName("h3")[0];
let playerOne = "";
let row0 = "";
let row1 = "";
let row2 = "";
let col0 = "";
let col1 = "";
let col2 = "";
let diagonal0 = "";
let diagonal3 = ""
let playerMoves1and2 = "";
let playerMoves123 = "";
let computerMode = false;

function getId(id) {
    return document.getElementById(id);
}

function startGame() {
    enableAllButtons()
    restartGameAnimation()
    textBanner.innerHTML = "First move will be X"
    playerTurn = 0;
    boardPosition = 0;
    computerMode = false;
    for (let i = 0; i <= 8; i++) {
        document.getElementById("img" + i).src = "images/shapeBlank.svg"
        inputShapeArray[i] = '';
        playerMovesArray.pop();
    }

}

//*************** Insert X or O and player logic  ******************************
function insertShape(id) {
    // Use for number of turns
    playerTurn++;
    // odd number X even number O
    playerOne = (playerTurn % 2 === 1);
    switch (id) {
        case 0:
            if (playerOne ? getId('img0').src = shapeX : getId('img0').src = shapeO)
                getId('btn0').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 1:
            if (playerOne ? getId('img1').src = shapeX : getId('img1').src = shapeO)
                getId('btn1').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 2:
            if (playerOne ? getId('img2').src = shapeX : getId('img2').src = shapeO)
                getId('btn2').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 3:
            if (playerOne ? getId('img3').src = shapeX : getId('img3').src = shapeO)
                getId('btn3').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 4:
            if (playerOne ? getId('img4').src = shapeX : getId('img4').src = shapeO)
                getId('btn4').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 5:
            if (playerOne ? getId('img5').src = shapeX : getId('img5').src = shapeO)
                getId('btn5').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 6:
            if (playerOne ? getId('img6').src = shapeX : getId('img6').src = shapeO)
                getId('btn6').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 7:
            if (playerOne ? getId('img7').src = shapeX : getId('img7').src = shapeO)
                getId('btn7').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
        case 8:
            if (playerOne ? getId('img8').src = shapeX : getId('img8').src = shapeO)
                getId('btn8').disabled = true;
            inputShapeArray[id] = (playerOne ? 'x' : '0');
            boardPosition = id;
            playerMovesArray.push(id);
            break;
    }
    inputShapeVariables();
    validateGameBoard();
    if (computerMode) computerSelections(playerOne ? '0' : 'x');
}

//*************** Values for row, col, diagonal   ******************************

function inputShapeVariables() {
    row0 = inputShapeArray[0] + inputShapeArray[1] + inputShapeArray[2];
    row1 = inputShapeArray[3] + inputShapeArray[4] + inputShapeArray[5];
    row2 = inputShapeArray[6] + inputShapeArray[7] + inputShapeArray[8];
    col0 = inputShapeArray[0] + inputShapeArray[3] + inputShapeArray[6];
    col1 = inputShapeArray[1] + inputShapeArray[4] + inputShapeArray[7];
    col2 = inputShapeArray[2] + inputShapeArray[5] + inputShapeArray[8];
    diagonal0 = inputShapeArray[0] + inputShapeArray[4] + inputShapeArray[8];
    diagonal3 = inputShapeArray[2] + inputShapeArray[4] + inputShapeArray[6];
    playerMoves1and2 = "" + playerMovesArray[0] + playerMovesArray[1];
   playerMoves123 = "" + playerMovesArray[0] + playerMovesArray[1] + playerMovesArray[2];


}

//*************** Animations   ******************************
function horizontalLineAnimation() {
    let marginNum = 0;
    switch (boardPosition) {
        case 0:
        case 1:
        case 2:
            marginNum = 50;
            break
        case 3:
        case 4:
        case 5:
            marginNum = 150;
            break
        case 6:
        case 7:
        case 8:
            marginNum = 250;
            break
    }
    document.getElementById("boardAnimation").animate([
        {
            border: "1px black solid",
            marginTop: marginNum + "px",
            marginLeft: "4px",
            width: "1px",
            transform: "rotate(0deg)",
            position: "fixed",
        },
        {
            border: "1px black solid",
            marginTop: marginNum + "px",
            marginLeft: "4px",
            transform: "rotate(0deg)",
            width: "100%",
            position: "fixed",
        },
    ], {duration: 1000, fill: "forwards"})

}

function verticalLineAnimation() {
    let margin = 0;
    switch (boardPosition) {
        case 0:
        case 3:
        case 6:
            margin = 17;
            break
        case 1:
        case 4:
        case 7:
            margin = 50;
            break
        case 2:
        case 5:
        case 8:
            margin = 83;
            break
    }
    document.getElementById("boardAnimation").animate([
        {
            border: "1px black solid",
            marginTop: "20px",
            marginLeft: margin + "%",
            width: "1px",
            height: "0",
            transform: "rotate(0deg)",
            position: "fixed",
        },
        {
            border: "1px black solid",
            marginTop: "20px",
            marginLeft: margin + "%",
            height: "90%",
            width: "1px",
            transform: "rotate(0deg)",
            position: "fixed",


        },
    ], {duration: 1000, fill: "forwards"})

}

function diagonalLineAnimationPos0() {

    document.getElementById("boardAnimation").animate([
        {
            border: "1px black solid",
            marginTop: "0px",
            marginLeft: "0%",
            width: "0px",
            height: "0px",
            transform: 'rotate(45deg)',
            position: "fixed",
        },
        {
            border: "1px black solid",
            marginTop: "150px",
            width: "100%",
            height: "0px",
            transform: 'rotate(45deg)',
            position: "fixed",

        },
    ], {duration: 1000, fill: "forwards"})


}

function diagonalLineAnimationPos3() {

    document.getElementById("boardAnimation").animate([
        {
            border: "1px black solid",
            marginTop: "0px",
            marginLeft: "100%",
            width: "0px",
            height: "0px",
            transform: 'rotate(-45deg)',
            position: "fixed",
        },
        {
            border: "1px black solid",
            marginTop: "150px",
            width: "100%",
            height: "0px",
            transform: 'rotate(-45deg)',
            position: "fixed",

        },
    ], {duration: 1000, fill: "forwards"})


}

function restartGameAnimation() {
    document.getElementById("boardAnimation").animate([
        {
            border: "0px",
            marginTop: "0px",
            marginLeft: "0px",
            skew: "0px",
            width: "0px",
            height: "0px",
            position: "fixed",
        },
    ], {duration: 1000, fill: "forwards"});

}

//*************** Enable and Disable Buttons   ******************************

function disableAllButtons() {
    for (let i = 0; i <= 8; i++) {
        getId('btn' + i).disabled = true;
    }
}

function enableAllButtons() {
    for (let i = 0; i <= 8; i++) {
        getId('btn' + i).disabled = false;

    }
}

//***************  validation   ******************************
function validateRowColDiagonal(char) {

    return (char === 'xxx' || char === '000')
}

function validateAllRowColDiagonal() {

    if (validateRowColDiagonal(row0) || validateRowColDiagonal(row1) || validateRowColDiagonal(row2)) return 0;
    if (validateRowColDiagonal(col0) || validateRowColDiagonal(col1) || validateRowColDiagonal(col2)) return 1;
    if (validateRowColDiagonal(diagonal0)) return 2;
    if (validateRowColDiagonal(diagonal3)) return 3;

    if (!validateRowColDiagonal(row0) && !validateRowColDiagonal(row1) && !validateRowColDiagonal(row2) &&
        !validateRowColDiagonal(col0) && !validateRowColDiagonal(col1) && !validateRowColDiagonal(col2) &&
        !validateRowColDiagonal(diagonal0) && !validateRowColDiagonal(diagonal3)
    ) return 4;
}

function validateGameBoard() {
    if (validateAllRowColDiagonal() < 4) {
        if (validateAllRowColDiagonal() === 0) horizontalLineAnimation();
        if (validateAllRowColDiagonal() === 1) verticalLineAnimation();
        if (validateAllRowColDiagonal() === 2) diagonalLineAnimationPos0();
        if (validateAllRowColDiagonal() === 3) diagonalLineAnimationPos3();


        textBanner.innerHTML = `${(playerOne ? 'x' : '0').toUpperCase()} WON !`;
        if (computerMode) textBanner.innerHTML = `${(playerOne ? '0' : 'x').toUpperCase()} WON !`;

        disableAllButtons();

    } else if (playerTurn === 9) {
        textBanner.innerHTML = 'Draw Game';
    }
}

//*************** Computer logic   ******************************
function computerSelections(char) {
    computerMode = true;
// todo test 1-8
    if (char === 'x') {
        switch (playerTurn) {
            case 0:
                assignComputerValue(4, 'x')
                break;
            // Depending on player's first move the computer will respond accordingly
            case 2:
                if (playerMovesArray[0] === 0) assignComputerValue(6, 'x')
                if (playerMovesArray[0] === 1) assignComputerValue(3, 'x')
                if (playerMovesArray[0] === 2) assignComputerValue(1, 'x')
                if (playerMovesArray[0] === 3) assignComputerValue(2, 'x')
                if (playerMovesArray[0] === 5) assignComputerValue(2, 'x')
                if (playerMovesArray[0] === 6) assignComputerValue(0, 'x')
                if (playerMovesArray[0] === 7) assignComputerValue(2, 'x')
                if (playerMovesArray[0] === 8) assignComputerValue(2, 'x')
                break;
            case 4:
                // Depending on player's first and second move the computer will respond accordingly

                switch (playerMovesArray[0]) {
                    case 0:
                        (playerMoves1and2 === '02' ?
                            assignComputerValue(1, 'x') : assignComputerValue(2, 'x'))
                        break;
                    case 1:
                        (playerMoves1and2 === '15' ?
                            assignComputerValue(0, 'x') : assignComputerValue(5, 'x'))
                        break;
                    case 2:
                        (playerMoves1and2 === '27' ?
                            assignComputerValue(5, 'x') : assignComputerValue(7, 'x'))
                        break;
                    case 3:
                        (playerMoves1and2 === '36' ?
                            assignComputerValue(0, 'x') : assignComputerValue(6, 'x'))
                        break;
                    case 5:
                        (playerMoves1and2 === '56' ?
                            assignComputerValue(8, 'x') : assignComputerValue(6, 'x'))
                        break;
                    case 6:
                        (playerMoves1and2 === '68' ?
                            assignComputerValue(7, 'x') : assignComputerValue(8, 'x'))
                        break;
                    case 7:
                        (playerMoves1and2 === '76' ?
                            assignComputerValue(8, 'x') : assignComputerValue(6, 'x'))
                        break;
                    case 8:
                        if (playerMoves1and2 === '86' ?
                            assignComputerValue(7, 'x') : assignComputerValue(6, 'x'))
                            break;
                }
                break;
            case 6:
                // Depending on player's first ,second and third  move the computer will respond accordingly


                switch (playerMoves1and2) {
                    case '02':
                        (playerMovesArray[2] === 7 ?
                            assignComputerValue(3, 'x') : assignComputerValue(7, 'x'))
                        break;
                    case '15':
                        (playerMovesArray[2] === 8 ?
                            assignComputerValue(6, 'x') : assignComputerValue(8, 'x'))
                        break;

                    case '27':
                        (playerMovesArray[2] === 3 ?
                            assignComputerValue(0, 'x') : assignComputerValue(3, 'x'))
                        break;
                    case '36':
                        (playerMovesArray[2] === 1 ?
                            assignComputerValue(8, 'x') : assignComputerValue(1, 'x'))
                        break;

                    case '56':
                        (playerMovesArray[2] === 1 ?
                            assignComputerValue(8, 'x') : assignComputerValue(2, 'x'))
                        break;

                    case '68':
                    case '86':
                    case '76':
                        (playerMovesArray[2] === 1 ?
                            assignComputerValue(5, 'x') : assignComputerValue(1, 'x'))
                        break;
                }
                break;
            case 8:
                // Depending on player's moves 1-4 the computer will respond accordingly

                switch (playerMoves123){
                    case '027':
                        (playerMovesArray[3] === 5 ?
                            assignComputerValue(8, 'x') : assignComputerValue(5, 'x'))
                        break;
                    case '273':
                        (playerMovesArray[3] === 8 ?
                            assignComputerValue(6, 'x') : assignComputerValue(8, 'x'))
                        break;
                    case '681':
                        (playerMovesArray[3] === 3 ?
                            assignComputerValue(2, 'x') : assignComputerValue(3, 'x'))
                        break;
                    case '861':
                        (playerMovesArray[3] === 3 ?
                            assignComputerValue(0, 'x') : assignComputerValue(3, 'x'))
                        break;
                }

                break;
        }

    } else {

    }
    validateGameBoard();


}

function assignComputerValue(num, char) {
    playerTurn++;
    getId('img' + num).src = shapeX;
    getId('btn' + num).disabled = true;
    inputShapeArray[num] = (char);
    boardPosition = num;
    inputShapeVariables();

}

