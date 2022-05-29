"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "23";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".guess").value = "222";
// console.log(document.querySelector(".guess").textContent);
// document.querySelector("");
let num = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess > num) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < num) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === num) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".number").textContent = num;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
