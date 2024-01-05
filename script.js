document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            playGame(button.className);
        });
    });
});

let movesLeft = 10;
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    const resultElement = document.querySelector(".result");
    if (resultElement) {
        resultElement.innerText = `Computer chose ${computerChoice}. ${result}`;
    } else {
        console.error("Element with class 'result' not found.");
    }

    updateScore();
}

function updateScore() {
    const playerScoreElement = document.querySelector(".p-count");
    const computerScoreElement = document.querySelector(".c-count");

    if (playerScoreElement && computerScoreElement) {
        playerScoreElement.innerText = playerScore;
        computerScoreElement.innerText = computerScore;
    } else {
        console.error("Score elements not found.");
    }

    if (movesLeft === 1) {
        displayGameOverAndWinner();
    } else {
        movesLeft--;
        const movesLeftElement = document.querySelector(".movesleft");
        if (movesLeftElement) {
            movesLeftElement.innerText = `Moves Left: ${movesLeft}`;
        }
    }
}

function displayGameOverAndWinner() {
    const messageBox = document.querySelector(".message-box");

    if (messageBox) {
        messageBox.style.display = "block";

        const resultElement = document.querySelector(".result");
        if (resultElement) {
            resultElement.innerText = " ";
        }

        let overallMessage = "";
        if (playerScore > computerScore) {
            overallMessage = "Player wins overall!";
        } else if (computerScore > playerScore) {
            overallMessage = "Computer wins overall!";
        } else {
            overallMessage = "It's a tie overall!";
        }

        messageBox.innerHTML += `<p class="overall-winner">${overallMessage}</p>`;
        messageBox.innerHTML += "<p>Game Over! Thank you for playing.</p>";
    }
}
function restartGame() {
    movesLeft = 10;
    playerScore = 0;
    computerScore = 0;

    const movesLeftElement = document.querySelector(".movesleft");
    const playerScoreElement = document.querySelector(".p-count");
    const computerScoreElement = document.querySelector(".c-count");
    const resultElement = document.querySelector(".result");
    const messageBox = document.querySelector(".message-box");

    if (movesLeftElement && playerScoreElement && computerScoreElement && resultElement && messageBox) {
        movesLeftElement.innerText = `Moves Left: ${movesLeft}`;
        playerScoreElement.innerText = playerScore;
        computerScoreElement.innerText = computerScore;
        resultElement.innerText = "";
        messageBox.style.display = "none";

        const buttons = document.querySelectorAll(".options button");
        buttons.forEach((button) => {
            button.disabled = false;
        });
    } else {
        console.error("Some elements not found.");
    }
}


