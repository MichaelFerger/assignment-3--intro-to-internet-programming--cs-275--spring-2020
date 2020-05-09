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

letters[1].addEventListener(`click`, function(){
    rotatedA = false;
    rotatedC = false;
    rotatedD = false;
    let deg = rotatedB ? 0 : 180;
    letters[0].style.transform = `rotate(0deg)`;
    letters[1].style.transform = `rotate(`+deg+`deg)`;
    letters[2].style.transform = `rotate(0deg)`;
    letters[3].style.transform = `rotate(0deg)`;
    rotatedB = !rotatedB;
});

letters[2].addEventListener(`click`, function(){
    rotatedA = false;
    rotatedB = false;
    rotatedD = false;
    let deg = rotatedC ? 0 : 180;
    letters[0].style.transform = `rotate(0deg)`;
    letters[1].style.transform = `rotate(0deg)`;
    letters[2].style.transform = `rotate(`+deg+`deg)`;
    letters[3].style.transform = `rotate(0deg)`;
    rotatedC = !rotatedC;
});

letters[3].addEventListener(`click`, function(){
    rotatedA = false;
    rotatedB = false;
    rotatedC = false;
    let deg = rotatedD ? 0 : 180;
    letters[0].style.transform = `rotate(0deg)`;
    letters[1].style.transform = `rotate(0deg)`;
    letters[2].style.transform = `rotate(0deg)`;
    letters[3].style.transform = `rotate(`+deg+`deg)`;
    rotatedD = !rotatedD;
});
