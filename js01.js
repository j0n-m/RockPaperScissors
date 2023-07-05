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
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
const rockPaperScissors = document.querySelectorAll(".rpsBtn");
// Add event listener for click on each game selection
rockPaperScissors.forEach((selection) => {
  selection.addEventListener("click", game);
});

function game() {
  let playerChoice = "";
  let computerChoice = "";
  playerChoice = this.textContent;
  computerChoice = getComputerChoice();
  let announcement = playRound(playerChoice, computerChoice);
  updateScore(announcement);
  if (gameOver) {
    const rockBtn = document.querySelector(".rockBtn");
    const paperBtn = document.querySelector(".paperBtn");
    const scissorsBtn = document.querySelector(".scissorsBtn");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    return;
  }
}
function updateScore(announcement) {
  const paragraphScore = document.querySelector(".score");
  const paragraphAnnouncement = document.querySelector(".announcement");

  paragraphScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore == 5) {
    paragraphAnnouncement.classList.add("winner");
    announcement = "Player wins the game!";
    gameOver = true;
  } else if (computerScore == 5) {
    paragraphAnnouncement.classList.add("winner");
    announcement = "Computer wins the game!";
    gameOver = true;
  }
  paragraphAnnouncement.textContent = announcement;

}

/*
create variable for each button
event listenrs for each button
 on click, player selection = the button's text value
 and run the playround() function

*/