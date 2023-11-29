let turn = 1;
let line, column, startColor;
let table = document.getElementById("table");
let mainDiagonals = [[31,42,53,64],[21,32,43,54,65],[11,22,33,44,55,66],[12,23,34,45,56],
[13,24,35,46,57],[14,25,36,47]];
let secondaryDiagonals = [[14, 23, 32, 41], [15, 24, 33, 42, 51], [16, 25, 34, 43, 52, 61],
[17, 26, 35, 44, 53, 62], [27, 36, 45, 54, 63], [37, 46, 55, 64]];

function startGame() {
     table.style.display = "block";
 }

function appearColor(id) {
    if(turn == 1) {
        document.getElementById(id).style.backgroundColor ="red";
        document.getElementById(id).removeAttribute("onclick");
        turn = 0;
    } else {
        document.getElementById(id).style.backgroundColor ="yellow";
        document.getElementById(id).removeAttribute("onclick");
        turn = 1;
    }
    line = ~~(id / 10);
    column = id % 10;
    startColor = (document.getElementById(id).style.backgroundColor);
    verifyLineColor(line,column,startColor);
    verifyColumnColor(line,column,startColor);
    verifyMainDiagonalColor(line * 10 + column, startColor);
    verifySecondaryDiagonalColor(line * 10 + column, startColor);
}

function verifyLineColor(givenLine, givenColumn,startColor) {
    let sameColor = 0;
    for(let i = 1; i <= 7; ++i) {
        let indice = givenLine * 10 + i;
        if(startColor == document.getElementById(indice).style.backgroundColor) {
            ++sameColor;
        } else {
            if(sameColor >= 4) {
                winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
                disableOnClick();
            }
            sameColor = 0;
        }
    }
    if(sameColor >= 4) {
        winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
        disableOnClick();
    }
}

function verifyColumnColor(givenLine, givenColumn,startColor) {
    let sameColor = 0;
    for(let i = 1; i <= 6; ++i) {
        let indice = i * 10 + givenColumn;
        if(startColor == document.getElementById(indice).style.backgroundColor) {
            ++sameColor;
        } else {
            if(sameColor >= 4) {
                winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
                disableOnClick();
            }
            sameColor = 0;
        }
    }
    if(sameColor >= 4) {
        winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
        disableOnClick();
    }
}

function verifyMainDiagonalColor(id, startColor) {
    let sameColor = 0;
    for (let i = 0; i < 6; ++i) {
        if (mainDiagonals[i].includes(id)) {
            for(let j = 0; j < mainDiagonals[i].length; ++j) {
                if (startColor == document.getElementById(mainDiagonals[i][j]).style.backgroundColor) {
                    ++sameColor;
                }  else {
                    if(sameColor >= 4) {
                        winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
                        disableOnClick();
                    }
                    sameColor = 0;
                }
            }
            if(sameColor >= 4) {
                winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
                disableOnClick();
            }
        }
    }
}

function verifySecondaryDiagonalColor(id, startColor) {
    let sameColor = 0;
    for (let i = 0; i < 6; ++i) {
        if (secondaryDiagonals[i].includes(id)) {
            for(let j = 0; j < secondaryDiagonals[i].length; ++j) {
                if (startColor == document.getElementById(secondaryDiagonals[i][j]).style.backgroundColor) {
                    ++sameColor;
                }  else {
                    if(sameColor >= 4) {
                        winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
                        disableOnClick();
                    }
                    sameColor = 0;
                }
            }
            if(sameColor >= 4) {
                winningText.innerHTML = 'Congratulations player '+ startColor + ' won!';
                disableOnClick();
            }
        }
    }
}

function disableOnClick() {
    for (let i = 1; i <= 6; ++i) {
        for (let j = 1; j <= 7; ++j) {
            document.getElementById('' + (i * 10 + j) + '').onclick = null;
        }
    }
}
