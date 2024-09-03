function getComputerChoice() {
  let answers = ["rock", "paper", "scissors"];
  return answers[(Math.floor(Math.random() * 3))];
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats scissors!");
      return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats paper!");
      return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock!");
      return humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("You lose! Scissors beats paper!");
      return computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("You lose! Paper beats rock!");
      return computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("You lose! Rock beats scissors!");
      return computerScore++;
    } else if (computerChoice === humanChoice) {
      console.log("It's a tie!");
    } 
} 

const rock = document.querySelector(".rock");

 rock.addEventListener("click", () => {
  playRound("rock");
});

const paper = document.querySelector(".paper");

paper.addEventListener("click", () => {
  playRound("paper");
});

const scissors = document.querySelector(".scissors");

scissors.addEventListener("click", () => {
  playRound("scissors");
});

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//     console.log("Computer score: " + computerScore + " | Your score: " + humanScore);
//   }
//   if (humanScore > computerScore) {
//     console.log("CONGRATS, YOU WIN!");
//   } else if (computerScore > humanScore) {
//     console.log("COMPUTER WINS! TRY AGAIN!");
//   } else {
//     console.log("YOU TIED!");
//   }
// }

// playGame();

