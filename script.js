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
        return 0;
    }
    else if (playerSelection === 'rock' && computer === 'scissors')
        return 1;
    else if (playerSelection === 'paper' && computer === 'rock')
        return 1;
    else if (playerSelection === 'scissors' && computer === 'paper')
        return 1;
    else return -1;
    }

function game(rounds, playerSelection){
    // PLays game of R/P/S and returns object with numbers of wins, loses and draws.
    let wins = 0;
    let loses = 0;
    let draws = 0;
    for (i=0; i<rounds; i++){
        outcome = playRound(playerSelection, computerPlay());
        if (outcome === 0){
            draws+=1;
        }
        else if (outcome === 1) {
            wins +=1;
        }
        else {
            loses+=1;}

    }
    return {'wins' : wins, 'loses' : loses, 'draws' :draws};
}


outcomes = [];
let gamebuttons = document.querySelectorAll(".game");

gamebuttons.forEach(button => { 
    button.addEventListener('click', () =>{
        outcomes.push(playRound(button.textContent));
        console.log(outcomes);
    });
});

