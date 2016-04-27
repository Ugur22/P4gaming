var fish = document.getElementsByTagName("fish");
var game = document.getElementById("game");
var start = document.getElementById("start");

function createObject(x_pos, y_pos, tagname, color) {
    let object = document.createElement(tagname);
    object.style.left = `${x_pos}px`;
    object.style.top = `${y_pos}px`;
    object.style["-webkit-filter"] = `hue-rotate(${color}deg)`;
    return object;
}

var startGame = () => {
    for (var i = 1; i <= 100; i++) {
        displayObjects();
    }
    setInterval(displayObjects, 3000);
    start.remove();
    for (let i = 0; i < fish.length; i++) {
        fish[i].addEventListener("click", killFish);
    }
};

var displayObjects = () => {
    var randomX = Math.floor(Math.random() * 1200) + 1;
    var randomY = Math.floor(Math.random() * 1200) + 1;
    var randomColor = Math.floor(Math.random() * 1000) + 1;
    var fishes = createObject(randomX, randomY, 'fish', randomColor);
    var bubbles = createObject(randomX, randomY, 'bubble');
    game.appendChild(fishes);
    game.appendChild(bubbles);
};

var killFish = (e) => {
    let chosenFish = e.target;
    console.log(chosenFish);
    chosenFish.classList.add('deadfish');
};
// start the game on window load
window.addEventListener("load", function () {

    start.addEventListener('click', startGame);

});