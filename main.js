const tickRate = 1000 / 30;
let score = 0;

let juicer = new Building('Juicer', 0.1, 15, 'buyJuicer');

function incScore() {
    score += juicer.cps;
}

function scorePlusPlus() {
    score++;

}

function updatePage() {
    incScore();
    document.getElementById('score').innerHTML = 
    "$" + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);