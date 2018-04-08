
var colors = generateRandomColors(3);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[0];
var colorDisplay = document.getElementById("colorDisplay");
var info = document.getElementById("info");
var title = document.getElementById("title");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var scoreArea = document.querySelector("#score-area span");
var hiScoreArea = document.querySelector("#hiScore-area span");
var score = 0;
var scoreMultiply = 1;
var hiscore = localStorage.getItem('hiscore') || 0;
hiScoreArea.innerHTML = hiscore;

easyMode();



function randomColors() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";  
}

function generateRandomColors(number) {
    var tab = [];
    for (var i = 0; i < number; i++) {
    tab.push(randomColors()); 
}
    return tab;
}

function randomPickedColor(sqr) {
    return Math.floor(Math.random() * sqr)
}

function easyMode() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
        for( var i = 3; i < 6; i++) {
            squares[i].style.display = "none";
        }
    newGame(3);
    scoreMultiply = 1;
}

function hardMode() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
        for( var i =0; i < 6; i++) {
            squares[i].style.display = "block";
        }
    newGame(6);
    scoreMultiply = 3;
}

function modeCheck() {
    if (easyBtn.classList.contains("selected")) {
        return 3;
    } else if(hardBtn.classList.contains("selected")) {
        return 6;
    } 
    
}



function changeAllColors(color) {
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function goodOrNot() {
        var clickedColor = (this.style.background);
        if (clickedColor === pickedColor) {
            info.textContent = "Correct!";
            reset.textContent = "Give me more!";
            title.style.background = pickedColor;
            changeAllColors(pickedColor);
            cleanListeners(modeCheck());
            playerScore (1);

            } else {
                info.textContent = "Game Over";
                this.style.background = "gray";
                reset.textContent = "Play Again?";
                cleanListeners(modeCheck());
                playerScore (0);

            }
}



function newGame(num){

    if (reset.textContent == 'New Game') playerScore(0);
    title.style.background = "gray";
    colors = generateRandomColors(num);
    pickedColor = colors[randomPickedColor(num)];
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Game";
    info.textContent = "";
    mark1 = true;   
    for(var i = 0; i < num; i++){
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", goodOrNot);
    }
}

function cleanListeners(num) {
    for(var i = 0; i < num; i++){
        squares[i].removeEventListener("click", goodOrNot);
    }
}

function playerScore (pt) {
    if(pt) score += scoreMultiply;
    else if(!pt) score = 0;
    scoreArea.innerHTML = score;
    
    
    

    if (score > hiscore) {
        localStorage.setItem('hiscore', score);
        hiScoreArea.innerHTML = score;
    }
    }


reset.addEventListener("click", function(){newGame(modeCheck())});

easyBtn.addEventListener("click", easyMode);

hardBtn.addEventListener("click", hardMode);

newGame(modeCheck());