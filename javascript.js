let playerScore=0;
let computerScore=0;


for (i=0;i<5;i++) {
const choices = ['rock','paper','scissors'];
const random = Math.floor(Math.random() * choices.length);
  
    function computerPlay(){
    return (choices[random]);
    };

let playerSelection= prompt('Pick');
let player = playerSelection.toLowerCase();


function playRound() {
  if (playerSelection.toLowerCase() == computerPlay()){
    return 'Tie round!'
  }
  else  if ((player == 'rock' && computerPlay() =='scissors') ||
           (player == 'scissors' && computerPlay() == 'paper') ||
           (player == 'paper' && computerPlay() == 'rock')) {
    playerScore = playerScore+1;
    return "Round won!"
  }
  else if ((player == 'rock' && computerPlay() == 'paper') ||
           (player == 'paper' && computerPlay() == 'scissors') ||
           (player == 'scissors' && computerPlay() == 'rock')){
    computerScore = computerScore+1;
    return 'Round lost!';
  }
  else {
    return 'Not a choice!'
  };
}

console.log(playRound());
console.log(playerScore,computerScore);
}
console.log(game());

  function game() {
  if (playerScore>computerScore) {
    return 'You won!'
  }
  else if (playerScore<computerScore){
    return 'You lost!'
  }
  else if (playerScore==computerScore){
    return 'Tie!'
  }
}
