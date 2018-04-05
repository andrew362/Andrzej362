
var colors = generateRandomColors(3);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[0];
var colorDisplay = document.getElementById("colorDisplay");
var info = document.getElementById("info");
var title = document.getElementById("title");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

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
    
}

function hardMode() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
        for( var i =0; i < 6; i++) {
            squares[i].style.display = "block";
        }
    newGame(6);
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
            info.textContent = "Correct!!!";
            reset.textContent = "Play Again?";
            title.style.background = pickedColor;
            changeAllColors(pickedColor);
            } else {
                info.textContent = "Try Again...";
                this.style.background = "gray";
            }
}


function newGame(num){
    title.style.background = "gray";
    colors = generateRandomColors(num);
    pickedColor = colors[randomPickedColor(num)];
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Game";
    info.textContent = "";    
    for(var i = 0; i < num; i++){
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", goodOrNot);
    }
}

reset.addEventListener("click", function(){newGame(modeCheck())});

easyBtn.addEventListener("click", easyMode);

hardBtn.addEventListener("click", hardMode);

newGame(modeCheck());