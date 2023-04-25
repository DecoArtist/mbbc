var coinSFX = new Audio();
coinSFX.src = "assets/audio/coin.mp3";

var restartSFX = new Audio();
restartSFX.src = "assets/audio/restart.mp3";

var upSFX = new Audio();
upSFX.src = "assets/audio/up.wav";

var maxupSFX = new Audio();
maxupSFX.src = "assets/audio/1000up.wav";

var NumbOfStarbits = Math.floor(Math.random() * 2);
var all_galaxybits_mg = new Array(NumbOfStarbits);
all_galaxybits_mg[0]= "--";all_galaxybits_mg[1]= "--";all_galaxybits_mg[2]= "--";all_galaxybits_mg[3]= "--";all_galaxybits_mg[4]= "--";
all_galaxybits_mg[5]= "--";all_galaxybits_mg[6]= "--";all_galaxybits_mg[7]= "--";all_galaxybits_mg[8]= "--";all_galaxybits_mg[9]= "--";
all_galaxybits_mg[10]= "rainbow--";
var StarbitGenerator = Math.floor(Math.random()*all_galaxybits_mg.length);

function getname() {
    MarioCode = document.getElementById("getcode").value
    if (MarioCode == '1983') {
        return document.querySelector('.txt__code-fail').innerText = '',
        document.getElementById('getcode').classList.remove('--getcode__fail'),
        document.getElementById('getcode').classList.add('--getcode__good'),
        document.querySelector('.obj__coin').src = 'assets/images/obj/1983/coin_obj.gif',
        document.querySelector('.obj__brickblock').src = 'assets/images/obj/1983/bricks_obj.png',
        document.querySelector('.obj__submit-icon').src = 'assets/images/obj/1983/question_obj.gif',
        document.querySelector('.bgr-website').style = 'background-image: url(/assets/images/bg/232918.jpg);animation: none;background-size: cover; filter: blur(2px);background-position: bottom center;',
        document.body.classList.add('--AIHC'),
        coinSFX.src = "assets/audio/coin.mp3",
        restartSFX.src = "assets/audio/restart.mp3",
        upSFX.src = "assets/audio/up.wav",
        maxupSFX.src = "assets/audio/1000up.wav",
        document.getElementById('website__title').innerHTML = `Mario's Brick Coin<br>Block Clicker`,
        document.querySelector('.obj__brickblock').classList.remove('--galaxy');
    } else if (MarioCode == 'galaxy2007') {
        return document.querySelector('.txt__code-fail').innerText = '',
        document.getElementById('getcode').classList.remove('--getcode__fail'),
        document.getElementById('getcode').classList.add('--getcode__good'),
        document.querySelector('.obj__coin').src = `assets/images/obj/galaxy/${all_galaxybits_mg[StarbitGenerator]}starbit_obj.webp`,
        document.querySelector('.obj__brickblock').src = 'assets/images/obj/galaxy/starship-mario_obj.webp',
        document.querySelector('.obj__brickblock').classList.add('--galaxy'),
        document.querySelector('.obj__submit-icon').src = 'assets/images/obj/question_obj.webp',
        document.querySelector('.bgr-website').style = 'background-image: url(/assets/images/bg/bb80313422ae9bfc98f01d044cc6fda7.jpg);animation: none;background-size: cover;filter: blur(2px);background-position: center;',
        document.body.classList.add('--galaxy'),
        coinSFX.src = "assets/audio/galaxy/coin.wav",
        restartSFX.src = "assets/audio/galaxy/restart.wav",
        upSFX.src = "assets/audio/galaxy/up.wav",
        document.getElementById('website__title').innerHTML = `Mario Galaxy<br>Starship Clicker`;
    } else if (MarioCode == 'Galaxy2007') {
        return document.querySelector('.txt__code-fail').innerText = '',
        document.getElementById('getcode').classList.remove('--getcode__fail'),
        document.getElementById('getcode').classList.add('--getcode__good'),
        document.querySelector('.obj__coin').src = `assets/images/obj/galaxy/${all_galaxybits_mg[StarbitGenerator]}starbit_obj.webp`,
        document.querySelector('.obj__brickblock').src = 'assets/images/obj/galaxy/starship-mario_obj.webp',
        document.querySelector('.obj__brickblock').classList.add('--galaxy'),
        document.querySelector('.obj__submit-icon').src = 'assets/images/obj/question_obj.webp',
        document.querySelector('.bgr-website').style = 'background-image: url(/assets/images/bg/bb80313422ae9bfc98f01d044cc6fda7.jpg);animation: none;background-size: cover;filter: blur(2px);background-position: center;',
        document.body.classList.add('--galaxy'),
        coinSFX.src = "assets/audio/galaxy/coin.wav",
        restartSFX.src = "assets/audio/galaxy/restart.wav",
        upSFX.src = "assets/audio/galaxy/up.wav",
        document.getElementById('website__title').innerHTML = `Mario Galaxy<br>Starship Clicker`;
    } else {
        return document.querySelector('.txt__code-fail').innerText = 'This code is invalid...',
        document.getElementById('getcode').classList.add('--getcode__fail'),
        document.getElementById('getcode').classList.remove('--getcode__good');
    }
    
}

var counterVal = 0;

document.onkeyup = function (e) {
    if (e.keyCode == 32) {
        clickCounter();
        document.querySelector('.obj__brickblock-container').classList.add('--active'),
        setTimeout(() => {
            document.querySelector('.obj__brickblock-container').classList.remove('--active');
        }, 100);
    }
    else if (e.keyCode == 82) {
        resetCounter();
    }
    else if (e.keyCode == 13) {
        getname();
    }
};

document.getElementById('obj__brickblock-container').onclick = function(){
    clickCounter(); 
}
document.getElementById('getcode__verify').onclick = function(){
    getname();
}

function clickCounter() {
    updateDisplay(++counterVal);
    coinSFX.play();
}

function resetCounter() {
    if (counterVal > 0) {
    counterVal = 0;
    updateDisplay(counterVal);
    restartSFX.play();
    } else {
        counterVal = 0;
    }
}

function updateDisplay(val) {
document.getElementById("counter-label").innerHTML = val;
}