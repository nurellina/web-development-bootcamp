var randomNumber1 = getRandomInt(1, 6);
var randomNumber2 = getRandomInt(1, 6);
throwDice1();
throwDice2();
showWinner();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function throwDice1() {
  if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  }
}
function throwDice2() {
  if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }
}
function showWinner() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "player 2 wins";
  } else {
    document.querySelector("h1").textContent = "it is a draw";
  }
}
