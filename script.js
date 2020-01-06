function computerPlay() {
    let items = ['Rock', 'Paper', 'Scissors'];
    number = Math.floor(Math.random() * 3);
    return items[number];
}
function playRound(player, computer){
    if (player === computer){
        return 'Draw!';
    }
    else if (player === 'rock' && computer === 'scissors')
        return 'You win!';
    else if (player === 'paper' && computer === 'rock')
        return 'You win!';
    else if (player === 'scissors' && computer === 'paper')
        return 'You win!';
    else return 'You lose!';
    }
    

const playerSelection = 'rock'.toLowerCase();
const computerSelection = computerPlay().toLowerCase();

console.log(playRound(playerSelection, computerSelection));