let x = +prompt("Įveskite skaičių");
console.log(arYraNeigiamasArDalinasiIsDesimtiesBeLiekanos(x));


function arYraNeigiamasArDalinasiIsDesimtiesBeLiekanos(x) {
    if ((x<0)||(x%10==0)){
        return true;
    }
    else {
        false
    }
}