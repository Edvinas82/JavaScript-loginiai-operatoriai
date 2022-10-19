x = +prompt("Įveskite amžių");
console.log(arGalimasAmzius(x));

function arGalimasAmzius(x) {
    if ((x>0)&&(x<120)) {
        return true;
    }
    else {
        return false;
    }
}