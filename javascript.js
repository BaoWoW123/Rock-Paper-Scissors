let playerScore=0;
let computerScore=0;
let player = '';

const button = document.querySelector('#button');
button.addEventListener('click', () => {
  

  const choices = ['rock','paper','scissors'];
  let computer = choices[Math.floor(Math.random() * 3)];
  playRound(player,computer)
  player = 'rock';
  
  function playRound(player, computer) {

  if (player == computer){
    return 'Tie round!'
  }
  else  if ((player == 'rock' && computer =='scissors') ||
           (player == 'scissors' && computer == 'paper') ||
           (player == 'paper' && computer == 'rock')) {
    playerScore = playerScore+1;
    return "Round won!"
  }
  else if ((player == 'rock' && computer == 'paper') ||
           (player == 'paper' && computer == 'scissors') ||
           (player == 'scissors' && computer == 'rock')){
    computerScore = computerScore+1;
    return 'Round lost!';
  }
  else {
    return 'Not a choice!'
  };
}
console.log(playRound(player,computer))
console.log(playerScore,computerScore);
})

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
