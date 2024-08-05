let answers = ["rock", "paper", "scissors"];

const computerChoice = getComputerChoice()

function getComputerChoice() {
    return answers[(Math.floor(Math.random() * 3))] ;
}

console.log(getComputerChoice());


let getHumanChoice = prompt("Do you choose rock, paper or scissors?")

let humanChoice = getHumanChoice

if (getHumanChoice.toLowerCase() === "rock") {
    console.log("rock");
  } else if (getHumanChoice.toLowerCase() === "paper") {
    console.log("paper");
  } else if (getHumanChoice.toLowerCase() === "scissors") {
    console.log("scissors");
  } else {
    alert("Please write a valid option.");
  }
