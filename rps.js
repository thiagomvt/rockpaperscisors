// Write a function that randomly picks rock, paper or scisors for the PC
function getComputerChoice (){
    let randomPlay = Math.random()*3;
    let choice='';

    if (randomPlay < 1) {
        choice='rock';
        return choice;

    }else if (randomPlay > 2){
        choice='scissors';
        return choice;
    }else{
        choice='paper';
        return choice;
    }

}

// Write a function that plays one round of the game using as inputs 
// the PC's and player's selections and return the winner

let computerSelection = getComputerChoice()
let playerSelection = ''

function playRound(){

    computerSelection = getComputerChoice();
    playerSelection = prompt('Rock, Paper or Scissors?','')
    let result = '';

    if (playerSelection.toLowerCase()===computerSelection){
        console.log('It\'s a draw!');
        result = 'draw';

    } else if ((playerSelection.toLowerCase()==='rock' && computerSelection==='paper')
        || (playerSelection.toLowerCase()==='paper' && computerSelection==='scissors')
        || (playerSelection.toLowerCase()==='scissors' && computerSelection==='rock')){

            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        result = 'lose';

    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        result = 'win';
}
return result;
}

// Function that creates a game consisting of 5 rounds and keeps track of score

function game(){
    let count = 1;
    let playerScore = 0;
    let computerScore = 0;

    while (count <= 5){
        let roundResult = playRound(playerSelection, computerSelection);
        
        if (roundResult == 'draw'){
            console.log(`Score: Player ${playerScore} - ${computerScore} Computer`)

        }else if (roundResult == 'win'){
            playerScore++;
            console.log(`Score: Player ${playerScore} - ${computerScore} Computer`)

        }else{
            computerScore++;
            console.log(`Score: Player ${playerScore} - ${computerScore} Computer`)
        }

        count++;
    }
}

game()