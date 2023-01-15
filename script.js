var blueCar = document.getElementById('bluecar');
var raceCar = document.getElementById('racecar');
var result = document.getElementById("result")
const score = document.getElementById('score');
var game = document.getElementById('game');
var counter = 0;
var jumpsound = document.getElementById("jumpsound");
var left = document.getElementById("btn1");
var right = document.getElementById("btn2");
var control = document.getElementById("controls");



//bluecar move
blueCar.addEventListener("animationiteration", function () {
    var random = (Math.floor(Math.random() * 4) * 60)
    blueCar.style.left = random + "px"
    counter++
});

// race car move ph

right.addEventListener('click', function (e) {
    console.log('yoyo');

    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

    if (raceCarLeft < 150) {
        raceCar.style.left = (raceCarLeft + 60) + "px"
        jumpsound.play()
    }
})
left.addEventListener('click', function (e) {
    console.log('yoyo');

    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

    if (raceCarLeft > 0) {
        raceCar.style.left = (raceCarLeft - 60) + "px"
        jumpsound.play()
    }
})


//racecar move
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

        if (raceCarLeft < 150) {
            raceCar.style.left = (raceCarLeft + 60) + "px"
            jumpsound.play()
        }
    };

    if (e.keyCode == "37") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 60) + "px"
            jumpsound.play()
        }
    };
});

// // game over
setInterval(function Gameover() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var redCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));

    if ((blueCarLeft === redCarLeft) && (blueCarTop > 290) && (blueCarTop < 490)) {

        game.style.display = "none";
        control.style.display = "none";
        result.style.display = "block"
        score.innerHTML = `score: ${counter}`;

        counter = 0;
    }

}, 10);

