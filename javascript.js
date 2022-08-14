let playerScore=0;
let computerScore=0;
let player = '';

const scissorbtn = document.querySelector('#Scissorbtn');
scissorbtn.addEventListener('click', () => {
  
  const choices = ['rock','paper','scissors'];
  let computer = choices[Math.floor(Math.random() * 3)];
  
  player = 'scissors';
  console.log(playRound(player,computer), player, computer)
  console.log(playerScore,computerScore)
})

const rockbtn = document.querySelector('#Rockbtn');
rockbtn.addEventListener('click', () => {

  const choices = ['rock','paper','scissors'];
  let computer = choices[Math.floor(Math.random() * 3)];
  
  player = 'rock';
  console.log(playRound(player,computer), player, computer)
  console.log(playerScore,computerScore)
})

const paperbtn = document.querySelector('#Paperbtn');
paperbtn.addEventListener('click', () => {

  const choices = ['rock','paper','scissors'];
  let computer = choices[Math.floor(Math.random() * 3)];
  
  player = 'paper';
  
  console.log(playRound(player,computer), player, computer)
  console.log(playerScore,computerScore)
})

function playRound(player, computer) {

  if (player == computer){
    return 'Tie round!'
  }
  else  if ((player == 'rock' && computer =='scissors') ||
           (player == 'scissors' && computer == 'paper') ||
           (player == 'paper' && computer == 'rock')) {
    playerScore += +1;
    return "Round won!"
  }
  else if ((player == 'rock' && computer == 'paper') ||
           (player == 'paper' && computer == 'scissors') ||
           (player == 'scissors' && computer == 'rock')){
    computerScore = computerScore+ +1;
    return 'Round lost!';
  }
  else {
    return 'Not a choice!'
  };
    
}
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
