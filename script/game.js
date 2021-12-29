const shapeX = "images/shapeX.svg";
const shapeO = "images/shapeO.svg";
let playerTurn = 0;
let boardPosition = 0;
let inputShapeArray = [];
let playerMovesArray = [];
let boardArray = [];
let arrayMoveList = [];
let textBanner = document.getElementsByTagName("h2")[0];
let selectButtons = document.getElementsByClassName('selectButtons')[0];
let information = document.getElementsByClassName('info')[0];
let playerOne = "";
let row0 = "";
let row1 = "";
let row2 = "";
let col0 = "";
let col1 = "";
let col2 = "";
let diagonal0 = "";
let diagonal3 = ""
let computerMode = false;
let random = 0;

function startGame() {
    showInformation();
    getId("startBtn").innerHTML = "Restart Game";
    document.getElementsByClassName("gameBoard")[0].style.visibility = 'visible';
    selectButtons.style.visibility = "visible";
    enableAllButtons()
    restartGameAnimation()
    textBanner.innerHTML = "First move will be X"
    playerTurn = 0;
    boardPosition = 0;
    computerMode = false;
    for (let i = 0; i <= 8; i++) {
        document.getElementById("img" + i).src = "images/shapeBlank.svg"
        inputShapeArray[i] = '-';
        playerMovesArray.pop();
    }
    inputShapeVariables()
    computerSelections('0')
}

//*************** Insert X or O and player button clicks  ******************************
function insertShape(id) {

    // Use for number of turns
    playerTurn++;

    showPlayerTurnInfo()

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
    hideInformation();

    if (computerMode) computerSelections(playerOne ? '0' : 'x');
test();
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
    boardArray = [row0, row1, row2, col0, col1, col2, diagonal0, diagonal3];

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

//*************** Enable and Disable Game board buttons  Buttons   ******************************

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
    if (validateAllRowColDiagonal() <= 3) {
        if (validateAllRowColDiagonal() === 0) horizontalLineAnimation();
        if (validateAllRowColDiagonal() === 1) verticalLineAnimation();
        if (validateAllRowColDiagonal() === 2) diagonalLineAnimationPos0();
        if (validateAllRowColDiagonal() === 3) diagonalLineAnimationPos3();

        textBanner.innerHTML = `${(playerOne ? 'x' : '0').toUpperCase()} WON !`;


        disableAllButtons();

    } else if (playerTurn === 9) {
        textBanner.innerHTML = 'Draw Game';
    }
}

//*************** Computer logic   ******************************
function computerSelections(char) {
    hideInformation();
    computerMode = true;
    showPlayerTurnInfo();
    // computer will be x
    if (char === 'x') {
        switch (playerTurn) {
            case 0:
                arrayMoveList = [0, 2, 4, 6, 8];
                random = Math.floor(Math.random() * arrayMoveList.length);
                assignComputerValue(arrayMoveList[random], 'x')
                break;
            case 2:
            case 4:
            case 6:
            case 8:
                if (inputValidation('x') > -1) {
                    assignComputerValue(inputValidation('x'), 'x')
                } else if (inputValidation('0') > -1) {
                    assignComputerValue(inputValidation('0'), 'x')
                } else if (computerValidation('x') > -1) {
                    assignComputerValue(computerValidation('x'), 'x')
                } else {
                    for (let i = 0; i < inputShapeArray.length; i++) {
                        if (inputShapeArray[i] === '-') {
                            assignComputerValue(i, 'x')
                            break;
                        }
                    }
                }
        }
    }

    // computer will be 0
    if (char === '0') {
        switch (playerTurn) {
            case 1:
                arrayMoveList = [0, 2, 6, 8];
                random = Math.floor(Math.random() * arrayMoveList.length);
                (playerMovesArray[0] !== '-' && playerMovesArray[0] !== 4 ?
                    assignComputerValue(4, '0') : assignComputerValue(6, '0'))
                break;
            case 3:
            case 5:
                // switch (playerMovesArray[])
            case 7:
                if (inputValidation('0') > -1) {
                    assignComputerValue(inputValidation('0'), '0');
                } else if (inputValidation('x') > -1) {
                    assignComputerValue(inputValidation('x'), '0');
                } else if (computerValidation('x') > -1) {
                    assignComputerValue(computerValidation('x'), '0');
                } else {
                    for (let i = 0; i < inputShapeArray.length; i++) {
                        if (inputShapeArray[i] === '-') {
                            assignComputerValue(i, '0')
                            break;
                        }
                    }
                }
                break;
        }
    }
    validateGameBoard();
}

function assignComputerValue(num, char) {
    playerTurn++;
    (char === 'x' ? getId('img' + num).src = shapeX : getId('img' + num).src = shapeO);
    getId('btn' + num).disabled = true;
    inputShapeArray[num] = (char);
    boardPosition = num;
    inputShapeVariables();
    showPlayerTurnInfo();
}

function getPositionNumber(num) {
    switch (num) {
        case 0:
            if (inputShapeArray[0] === '-') return 0;
            if (inputShapeArray[2] === '-') return 2;
            if (inputShapeArray[1] === '-') return 1;

            break;
        case 1:
            if (inputShapeArray[4] === '-') return 4;
            if (inputShapeArray[3] === '-') return 3;
            if (inputShapeArray[5] === '-') return 5;

            break;
        case 2:
            if (inputShapeArray[6] === '-') return 6;
            if (inputShapeArray[8] === '-') return 8;
            if (inputShapeArray[7] === '-') return 7;

            break;
        case 3:
            if (inputShapeArray[0] === '-') return 0;
            if (inputShapeArray[6] === '-') return 6;
            if (inputShapeArray[3] === '-') return 3;

            break;
        case 4:
            if (inputShapeArray[1] === '-') return 1;
            if (inputShapeArray[4] === '-') return 4;
            if (inputShapeArray[7] === '-') return 7;

            break;
        case 5:
            if (inputShapeArray[2] === '-') return 2;
            if (inputShapeArray[8] === '-') return 8;
            if (inputShapeArray[5] === '-') return 5;

            break;
        case 6:
            if (inputShapeArray[0] === '-') return 0;
            if (inputShapeArray[4] === '-') return 4;
            if (inputShapeArray[8] === '-') return 8;
            break;
        case 7:
            if (inputShapeArray[2] === '-') return 2;
            if (inputShapeArray[4] === '-') return 4;
            if (inputShapeArray[6] === '-') return 6;
            break;

    }
}

function validateInput(char, shape) {
    return (char === shape + shape + '-' || char === '-' + shape + shape || char === shape + '-' + shape);
}

function computerMove(char, shape) {
    return (char === shape + '--' || char === '--' + shape || char === '-' + shape + '-');
}

function inputValidation(shape) {
    for (let i = 0; i < boardArray.length; i++) {
        if (validateInput(boardArray[i], shape)) return getPositionNumber(i);
    }
    return -1;
}

function computerValidation(shape) {
    for (let i = 0; i < boardArray.length; i++) {
        if (computerMove(boardArray[i], shape)) return getPositionNumber(i);
    }
    return -1;
}

//*************** Miscellaneous ******************************
function hideInformation() {
    selectButtons.style.visibility = 'hidden';
    information.style.visibility = "hidden";
}

function showInformation() {
    selectButtons.style.visibility = 'visible';
    information.style.visibility = "visible";
}

function getId(id) {
    return document.getElementById(id);
}

function showPlayerTurnInfo() {
    playerOne = (playerTurn % 2 === 1);
    (playerOne ?
        textBanner.innerHTML = "0 " + 'turn' : textBanner.innerHTML = "X " + 'turn');

}


