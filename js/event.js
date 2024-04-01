
// option: 1 ---> directly set on the html element
// onclick="document.body.style.backgroundColor = 'yellow'"


// option: 2 add onclick function on the html element
function makeRed() {
    document.body.style.backgroundColor = 'red' // important we will use this
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



// option: 4
const makePinkButton = document.getElementById('make_pink');

makePinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


// option: 4 another

const makeGreenButton = document.getElementById('make_green');

makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

// option: 4 final
// document.getElementById('make_goldenrod').addEventListener('click', function(){})

document.getElementById('make_goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenRod' // important we will use this someTime
})