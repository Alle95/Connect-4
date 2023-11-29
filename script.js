let turn = 1;
let line, column, startColor;
let color1;
let table = document.getElementById("table");

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
    verifyDiagonalColor(line,column,startColor);
    /*console.log(line);
    console.log(column);
    let color1 = (document.getElementById(id).style.backgroundColor);
    console.log(color1);
    let color2 = (document.getElementById('55').style.backgroundColor);
    console.log(color2);
    console.log(color1 == color2);*/
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

function verifyDiagonalColor(givenLine, givenColumn, startColor) {
    let sameColor = 0;
    for(let i = 1; i <= 6; ++i) [
        for(let j = givenLine + 1; j >=)
    ]
}

function disableOnClick() {
    for (let i = 1; i <= 6; ++i) {
        for (let j = 1; j <= 7; ++j) {
            document.getElementById('' + (i * 10 + j) + '').onclick = null;
        }
    }
}
