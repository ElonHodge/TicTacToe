const shapeX = "images/shapeX.svg";
const shapeO = "images/shapeO.svg";
let counter = 0;
let boardPosition = 0;
let playerMovesCombinationsArray = [];
let inputShapeArray = ['', '', '', '', '', '', '', '', '']
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
let diagonal1 = ""
let computerMode = false;


function getId(id) {
    return document.getElementById(id);
}

function startGame() {
    enableAllButtons()
    restartGameAnimation()
    textBanner.innerHTML = "First move will be X"
    counter = 0;
    boardPosition = 0;
    for (let i = 0; i <= 8; i++) {
        document.getElementById("img" + i).src = "images/shapeBlank.svg"
        inputShapeArray[i] = '';

    }
}

//*************** Insert X or O and player logic  ******************************
function insertShape(id) {
    // Use for number of turns
    counter++;
    // odd number X even number O
    playerOne = (counter % 2 === 1);
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
    diagonal1 = inputShapeArray[2] + inputShapeArray[4] + inputShapeArray[6];
    playerMovesCombinationsArray = [""+playerMovesArray[0]+playerMovesArray[1],
        ""+playerMovesArray[0]+playerMovesArray[1]+playerMovesArray[2]];
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

function diagonalLineAnimation() {
    let rotation = "";
    let marginNum = 0;
    switch (boardPosition) {
        case 0:
        case 4:
        case 8:
            rotation = "rotate(45deg)";
            marginNum = 0;
            break;
        case 2:
        case 4:
        case 6:
            rotation = "rotate(-45deg)";
            marginNum = 100;
            break;
    }
    document.getElementById("boardAnimation").animate([
        {
            border: "1px black solid",
            marginTop: "0px",
            marginLeft: marginNum + "%",
            width: "0px",
            height: "0px",
            transform: rotation,
            position: "fixed",
        },
        {
            border: "1px black solid",
            marginTop: "150px",
            width: "100%",
            height: "0px",
            transform: rotation,
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
    if (validateRowColDiagonal(diagonal0) || validateRowColDiagonal(diagonal1)) return 2;

    if (!validateRowColDiagonal(row0) && !validateRowColDiagonal(row1) && !validateRowColDiagonal(row2) &&
        !validateRowColDiagonal(col0) && !validateRowColDiagonal(col1) && !validateRowColDiagonal(col2) &&
        !validateRowColDiagonal(diagonal0) && !validateRowColDiagonal(diagonal1)
    ) return 3;
}

function validateGameBoard() {
    if (validateAllRowColDiagonal() < 3) {
        if (validateAllRowColDiagonal() === 0) horizontalLineAnimation();
        if (validateAllRowColDiagonal() === 1) verticalLineAnimation();
        if (validateAllRowColDiagonal() === 2) diagonalLineAnimation();
        textBanner.innerHTML = `${(playerOne ? 'x' : '0').toUpperCase()} WON !`;
        if (computerMode) textBanner.innerHTML = `${(playerOne ? '0' : 'x').toUpperCase()} WON !`;

        disableAllButtons();

    } else if (counter === 9) {
        textBanner.innerHTML = 'Draw Game';
    }
}

//*************** Computer logic   ******************************
function computerSelections(char) {
    computerMode = true;

    if (char === 'x') {
        switch (counter) {
            case 0:
                assignComputerValue(4, 'x')
                break;
            case 2:
                if (playerMovesArray[0] === 0) assignComputerValue(6,'x')
                if (playerMovesArray[0] === 1) assignComputerValue(3,'x')
                if (playerMovesArray[0] === 2) assignComputerValue(1,'x')
                if (playerMovesArray[0] === 3) assignComputerValue(2,'x')
                if (playerMovesArray[0] === 5) assignComputerValue(2,'x')
                if (playerMovesArray[0] === 6) assignComputerValue(0,'x')
                if (playerMovesArray[0] === 7) assignComputerValue(2,'x')
                if (playerMovesArray[0] === 8) assignComputerValue(2,'x')
                break;
            case 4:
                switch (playerMovesArray[0]) {
                    case 0:
                        if (playerMovesCombinationsArray[0] === '02') {
                            assignComputerValue(1, 'x')
                        } else if (playerMovesCombinationsArray[0] === '01' || '03' || '05' || '07' || '08') {
                            assignComputerValue(2, 'x')
                        }
                        break;
                    case 1:
                        if (playerMovesCombinationsArray[0] === '15') {
                            assignComputerValue(0, 'x')
                        } else if (playerMovesArray[0] === 1) {
                            if (playerMovesCombinationsArray[0] === '10' || '12' || '16' || '17' || '18')
                                assignComputerValue(5, 'x')
                        }
                        break;
                    case 2:
                        if (playerMovesCombinationsArray[0] === '27') {
                            assignComputerValue(5, 'x')
                        } else if (playerMovesArray[0] === 2) {
                            if (playerMovesCombinationsArray[0] === '23' || '25' || '26' || '27')
                                assignComputerValue(7, 'x')
                        }
                        break;
                    case 3:
                        if (playerMovesCombinationsArray[0] === '36') {
                            assignComputerValue(0, 'x')
                        } else if (playerMovesArray[0] === 3) {
                            if (playerMovesCombinationsArray[0] === '30' || '31' || '35' || '37' || '38')
                                assignComputerValue(6, 'x')
                        }
                        break;
                    case 5:
                        if (playerMovesCombinationsArray[0] === '56') {
                            assignComputerValue(8, 'x')
                        } else if (playerMovesArray[0] === 5) {
                            if (playerMovesCombinationsArray[0] === '50' || '51' || '53' || '57' || '58') {
                                assignComputerValue(6, 'x')
                            }
                        }
                        break;
                    case 6:
                        if (playerMovesCombinationsArray[0] === '68') {
                            assignComputerValue(7, 'x')
                        } else if (playerMovesArray[0] === 6) {
                            if (playerMovesCombinationsArray[0] === '61' || '63' || '65' || '67')
                                assignComputerValue(8, 'x')
                        }
                        break;
                    case 7:
                        if (playerMovesCombinationsArray[0] === '76') {
                            assignComputerValue(8, 'x')
                        } else if (playerMovesArray[0] === 7) {
                            if (playerMovesCombinationsArray[0] === '70' || '71' || '73' || '75' || '78')
                                assignComputerValue(6, 'x')
                        }
                        break;
                    case 8:
                        if (playerMovesCombinationsArray[0] === '86') {
                            assignComputerValue(7, 'x')
                        } else if (playerMovesArray[0] === 8) {
                            if (playerMovesCombinationsArray[0] === '80' || '81' || '83' || '85' || '87')
                                assignComputerValue(6, 'x')
                        }
                        break;
                }
                break;
            case 6:
                // todo
                switch (playerMovesArray[1]) {
                    case 0:
                        if (playerMovesCombinationsArray[0] === '02') {
                            assignComputerValue(1, 'x')
                        } else if (playerMovesCombinationsArray[0] === '01' || '03' || '05' || '07' || '08') {
                            assignComputerValue(2, 'x')
                        }
                        break;
                    case 1:
                        if (playerMovesCombinationsArray[0] === '15') {
                            assignComputerValue(0, 'x')
                        } else if (playerMovesArray[0] === 1) {
                            if (playerMovesCombinationsArray[0] === '10' || '12' || '16' || '17' || '18')
                                assignComputerValue(5, 'x')
                        }
                        break;
                    case 5:
                        if (playerMovesCombinationsArray[0] === '27') {
                            assignComputerValue(5, 'x')
                        } else if (playerMovesArray[0] === 2) {
                            if (playerMovesCombinationsArray[0] === '23' || '25' || '26' || '27')
                                assignComputerValue(7, 'x')
                        }
                        break;
                    case 7:
                        if (playerMovesCombinationsArray[0] === '36') {
                            assignComputerValue(0, 'x')
                        } else if (playerMovesArray[0] === 3) {
                            if (playerMovesCombinationsArray[0] === '30' || '31' || '35' || '37' || '38')
                                assignComputerValue(6, 'x')
                        }
                        break;
                    case 8:
                        if (playerMovesCombinationsArray[0] === '56') {
                            assignComputerValue(8, 'x')
                        } else if (playerMovesArray[0] === 5) {
                            if (playerMovesCombinationsArray[0] === '50' || '51' || '53' || '57' || '58') {
                                assignComputerValue(6, 'x')
                            }
                        }
                        break;

                }
                break;
            case 8:
                break;
        }

    } else {

    }
    validateGameBoard();

}

function assignComputerValue(num, char) {
    counter++;
    getId('img' + num).src = shapeX;
    getId('btn' + num).disabled = true;
    inputShapeArray[num] = (char);
    boardPosition = num;
    inputShapeVariables();

}

