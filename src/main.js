const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let juicer = new Building('Juicer', 0.4, 25);
let sugar = new Building('Sugar', 1, 39);
let ice = new Building('Ice', 2, 50);
let lemons = new Building('Lemons', 3, 90);
let straws = new Building('Straws', 4, 110);
let umbrellas = new Building('Umbrellas', 5, 120);
let mixer = new Building('Mixer', 6, 130);
let spoons = new Building('Spoons', 7, 135);
let cups = new Building('Cups', 8, 145);
let forks = new Building('Forks', 9, 160);


let caker1 = new Caker('Caker I', 100, juicer);
let caker2 = new Caker('Caker II', 110, sugar);
let boost1 = new Boost('Boost I', 120, lemons);
let boost2 = new Boost('Boost II', 150, straws);
let autoclicker1 = new Autoclicker('Autoclicker I', 200, umbrellas);
let autoclicker2 = new Autoclicker('Autoclicker II', 210, mixer);
let workers = new Workers('Workers', 250, spoons);
let workers2 = new Workers('Workers II', 300, cups);
let advertisement = new Advertisement('Advertisement', 350, forks);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += juicer.cps;
    score += sugar.cps;
    score += ice.cps;
    score += lemons.cps;
    score += straws.cps;
    score += umbrellas.cps;
    score += mixer.cps;
    score += spoons.cps;
    score += cups.cps;
    score += forks.cps;
}

function updateButtons() {
    juicer.buttonState();
    sugar.buttonState();
    ice.buttonState();
    lemons.buttonState();
    straws.buttonState();
    umbrellas.buttonState();
    mixer.buttonState();
    spoons.buttonState();
    cups.buttonState();
    forks.buttonState();

    caker1.buttonState();
    caker2.buttonState();
    boost1.buttonState();
    boost2.buttonState();
    autoclicker1.buttonState();
    autoclicker2.buttonState();
    workers.buttonState();
    workers2.buttonState();
    advertisement.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
