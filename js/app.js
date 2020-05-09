let letters = document.getElementsByTagName(`td`);
let rotatedA = false;
let rotatedB = false;
let rotatedC = false;
let rotatedD = false;

letters[0].addEventListener(`click`, function(){
    rotatedB = false;
    rotatedC = false;
    rotatedD = false;
    let deg = rotatedA ? 0 : 180;
    letters[0].style.transform = `rotate(`+deg+`deg)`;
    rotatedA = !rotatedA;
});
