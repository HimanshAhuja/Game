const $submitbutton = document.getElementById("check");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessNumber = Math.round(Math.random() * 100);
var message;
var lives = 10;

$submitbutton.onclick = () => {
    console.log(guessnumber);
    let userInput = document.getElementById("input-nummber");
    lives--;
    if (userInput == guessNumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (userInput > guessNumber) {
        message = `Oops !Your Guess Is Too High. You Have ${live} Remaining Live`;
    } else if (userInput < guessNumber) {
        message = `Oops !Your Guess Is Too Low. You Have ${live} Remaining Live`;
    }
    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
};