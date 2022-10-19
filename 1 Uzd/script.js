let x = +prompt("Įveskite skačių");
console.log(arSkaiciusYraIntervale(x));

function arSkaiciusYraIntervale(x) {
    if ((x>5) && (x<15)) {  
        return true;
    }
    else {
        return false;
    }
}