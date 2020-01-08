function computerPlay() {
    //Computes the random computer hand
    let items = ['Rock', 'Paper', 'Scissors'];
    number = Math.floor(Math.random() * 3);
    return items[number].toLowerCase();
}
function playRound(playerSelection){
    //Plays a single round of rock paper scissors with provided playerSelections hand
    playerSelection = playerSelection.toLowerCase();
    computer = computerPlay().toLowerCase();
    if (playerSelection === computer){
        return 'Draw!';
    }
    else if (playerSelection === 'rock' && computer === 'scissors')
        return 'You win!';
    else if (playerSelection === 'paper' && computer === 'rock')
        return 'You win!';
    else if (playerSelection === 'scissors' && computer === 'paper')
        return 'You win!';
    else return 'You lose!';
    }

function game(rounds, playerSelection){
    // PLays game of R/P/S and returns object with numbers of wins, loses and draws.
    let wins = 0;
    let loses = 0;
    let draws = 0;
    for (i=0; i<rounds; i++){
        outcome = playRound(playerSelection, computerPlay());
        if (outcome === 'Draw!'){
            draws+=1;
        }
        else if (outcome === 'You win!') {
            wins +=1;
        }
        else {
            loses+=1;}

    }
    return {'wins' : wins, 'loses' : loses, 'draws' :draws};
}

function displayResultsGame(outcome){
    /**Prints the results of outcome returned by game function */ 
    console.log(`You won ${outcome.wins} times, you lost ${outcome.loses} times!, ${outcome.draws} games ended as a draw`);
}
function displayResultsRound(outcome){
    // Prints the results of outcome returned by playRound function
    console.log(outcome);
}

