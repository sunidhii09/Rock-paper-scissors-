document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            playGame(button.className);
        });
    });
});

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
        updateScore("p-count"); // Update player score
    } else {
        result = "You lose!";
        updateScore("c-count"); // Update computer score
    }

    const resultElement = document.querySelector(".result");
    if (resultElement) {
        resultElement.innerText = `Computer chose ${computerChoice}. ${result}`;
    } else {
        console.error("Element with class 'result' not found.");
    }
}

function updateScore(scoreClass) {
    const scoreElement = document.querySelector(`.${scoreClass}`);
    if (scoreElement) {
        const currentScore = parseInt(scoreElement.innerText, 10);
        scoreElement.innerText = currentScore + 1;
    } else {
        console.error(`Element with class '${scoreClass}' not found.`);
    }
}
