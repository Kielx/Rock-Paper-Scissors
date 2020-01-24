function computerPlay() {
  //Computes the random computer hand
  let items = ["Rock", "Paper", "Scissors"];
  number = Math.floor(Math.random() * 3);
  return items[number].toLowerCase();
}
function playRound(playerSelection) {
  //Plays a single round of rock paper scissors with provided playerSelections hand
  playerSelection = playerSelection.toLowerCase();
  let computer = computerPlay().toLowerCase();
  let roundOutcome = {
    playerSelection: playerSelection,
    computerSelection: computer
  };

  if (playerSelection === computer) {
    roundOutcome.outcome = 0;
  } else if (playerSelection === "rock" && computer === "scissors") {
    roundOutcome.outcome = 1;
  } else if (playerSelection === "paper" && computer === "rock") {
    roundOutcome.outcome = 1;
  } else if (playerSelection === "scissors" && computer === "paper") {
    roundOutcome.outcome = 1;
  } else {
    roundOutcome.outcome = -1;
  }

  return roundOutcome;
}


function playGame(button) {
  let outcome = playRound(button.id.substr(7));
  let player = document.querySelector(`#${button.id}`);
  console.log(outcome);
  computer = document.querySelector(`#computer-${outcome.computerSelection}`);
  player.classList.add('game-move');
  computer.classList.add('computer-move');

  if (outcome.outcome === 1) {
    document.querySelector('.trophy').classList.add('trophyview');
    document.querySelector('.game-result').textContent = 'You won!';
  } else if (outcome.outcome === -1) {
    document.querySelector('.lose').classList.add('trophyview')  ;
    document.querySelector('.game-result').textContent = 'You lost!';
  } else {
    document.querySelector('.draw').classList.add('trophyview')  ;
    document.querySelector('.game-result').textContent = 'Draw!';
  }
  document.querySelector('.game-reset').classList.add('trophyview');
  document.querySelector('.game-result').classList.add('trophyview');
}

let gamebuttons = document.querySelectorAll(".player-game");
gamebuttons.forEach(button => {
  button.addEventListener("click", () => playGame(button));
  console.log(button.id);
});




