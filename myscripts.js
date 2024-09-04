const display = document.querySelector(".display");
const displayTwo = document.querySelector(".displayTwo");
const displayThree = document.querySelector(".displayThree");

function getComputerChoice() {
  let answers = ["rock", "paper", "scissors"];
  return answers[(Math.floor(Math.random() * 3))];
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice) {

  const computerChoice = getComputerChoice();

  displayTwo.textContent = `Computer score: ${computerScore} | Your score: ${humanScore}`;

  if (humanScore == 5) {
    displayThree.textContent = `CONGRATS! YOU WIN`;
  } else if (computerScore == 5) {
      displayThree.textContent = `COMPUTER WINS. TRY AGAIN.`;
  } else {
    displayThree.textContent = `GAME IN PROGRESS`;
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
      display.textContent = "You win! Rock beats scissors!";
      ++humanScore;
      return humanScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
      display.textContent = "You win! Scissors beats paper!";
      ++humanScore;
      return humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
      display.textContent = "You win! Paper beats rock!";
      ++humanScore;
      return humanScore;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
      display.textContent = "You lose! Scissors beats paper!";
      ++computerScore;
      return computerScore;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
      display.textContent = "You lose! Paper beats rock!";
      ++computerScore;
      return computerScore;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
      display.textContent = "You lose! Rock beats scissors!";
      ++computerScore;
      return computerScore;
  } else if (computerChoice === humanChoice) {
      display.textContent = "You tied!";
  } 
} 

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const reset = document.querySelector(".reset");

rock.addEventListener("click", () => {
  playRound("rock");
});

paper.addEventListener("click", () => {
  playRound("paper");
});

scissors.addEventListener("click", () => {
  playRound("scissors");
});

reset.addEventListener("click", () => {
  window.location.reload();
});