let turn = 1;

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
}
