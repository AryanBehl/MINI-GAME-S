const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function playGame(userChoice) {
  const compChoice = getComputerChoice();

  if (userChoice === compChoice) {
    result.innerText = "It's a Draw 🤝";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    userScoreSpan.innerText = userScore;
    result.innerText = `You Win 😎 (${userChoice} beats ${compChoice})`;
  } else {
    compScore++;
    compScoreSpan.innerText = compScore;
    result.innerText = `You Lose 😢 (${compChoice} beats ${userChoice})`;
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    playGame(userChoice);
  });
});