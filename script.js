function computerPlay() {
    //Computes the random computer hand
    let items = ['Rock', 'Paper', 'Scissors'];
    number = Math.floor(Math.random() * 3);
    return items[number].toLowerCase();
}
function playRound(playerSelection){
    //Plays a single round of rock paper scissors with provided playerSelections hand
    playerSelection = playerSelection.toLowerCase();
    let computer = computerPlay().toLowerCase();
    let roundOutcome = {
        playerSelection: playerSelection,
        computerSelection: computer
    };

    if (playerSelection === computer){
        roundOutcome.outcome = 0;
    }
    else if (playerSelection === 'rock' && computer === 'scissors'){
        roundOutcome.outcome = 1;}
    else if (playerSelection === 'paper' && computer === 'rock'){
        roundOutcome.outcome = 1;}
    else if (playerSelection === 'scissors' && computer === 'paper'){
        roundOutcome.outcome = 1;}
    else {roundOutcome.outcome = -1;}
    
    return roundOutcome;
    }



let playerScore = 0;
let computerScore = 0;
let outcomesView = document.querySelector("#outcomes");
let gameView = document.querySelector("#game-results");
outcomesView.textContent = `${playerScore} : ${computerScore}`;

function playGame(button){
    let outcome = playRound(button.textContent);
    if (outcome.outcome === 1){
        playerScore +=1;
        gameView.textContent = `You won! Your ${outcome.playerSelection} beats computer's ${outcome.computerSelection}`;
    }
    else if(outcome.outcome === -1){
        computerScore +=1;
        gameView.textContent = `You lost! Computer's ${outcome.computerSelection} beats Your ${outcome.playerSelection}`;
    }
    else{
        gameView.textContent = 'Draw!';
    }
    outcomesView.textContent = `${playerScore} : ${computerScore}`;
    

}

let gamebuttons = document.querySelectorAll(".game");
gamebuttons.forEach(button => { 
    button.addEventListener('click', () => playGame(button));});

