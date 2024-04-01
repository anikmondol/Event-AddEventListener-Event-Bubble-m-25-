// console.log('amei added hoice');


// option: 1 ---> directly set on the html element

// onclick="document.body.style.backgroundColor = 'yellow'"


// option: 2 add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red'
}


// option: 3 

const makeBlueButton = document.getElementById('make_blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// option: 3 another


const makePurpleButton = document.getElementById('make_purple');

makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}




