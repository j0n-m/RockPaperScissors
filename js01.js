function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      console.log(`Computer chose rock`);
      return "rock";
    case 2:
      console.log(`Computer chose paper`);
      return "paper"
    case 3:
      console.log(`Computer chose scissors`);
      return "scissors";
  }

}
function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    playerScore += 1;
    computerScore += 1;
    return "Round is a tie";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScore += 1;
    return "Player wins the round"
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    return "Computer wins the round";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore += 1;
    return "Player wins the round";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    return "Computer wins the round";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    return "Computer win the round";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScore += 1;
    return "Player wins the round";
  } else {
    return "Error: Player used invalid input";
  }

}
function game() {
  let playerChoice;
  let computerChoice;

  if (roundCount > 5) {
    (playerScore == computerScore) ? console.log("The game was a tie!") : (playerScore > computerScore) ? console.log("Player wins the game!") : console.log("Computer wins the game!");

  } else {
    console.log(`Round: ${roundCount}`);
    playerChoice = prompt("rock, paper, or scissors?");

    if (playerChoice) { //if there is any truthy input from prompt
      console.log(`You chose ${playerChoice}`);
      computerChoice = getComputerChoice();
      console.log(playRound(playerChoice, computerChoice));

    } else { //run if there is falsey input from prompt
      console.log("Game ended.");
      return;
    }
    roundCount += 1;
    console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`);
    game();

  }



}
let roundCount = 1;
let playerScore = 0;
let computerScore = 0;
game();

