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


const scoreboard = document.querySelector('#Scoreboard');
const score = document.createElement('div');
score.classList.add('score');
scoreboard.appendChild(score);

const round = document.createElement('div');
round.classList.add('round');
scoreboard.appendChild(round);

function playRound(player, computer) {
  

  if (player == computer){
    round.textContent = 'Round tie!';
    score.textContent = `Player:${playerScore}  Computer:${computerScore}`;
    return 'Tie round!';
  }
  else  if ((player == 'rock' && computer =='scissors') ||
           (player == 'scissors' && computer == 'paper') ||
           (player == 'paper' && computer == 'rock')) {
    playerScore += +1;
    if (playerScore === 5 && computerScore < playerScore) {
    alert("You won the game!")
  }
    score.textContent = `Player:${playerScore}  Computer:${computerScore}`;
    round.textContent = 'Round won!';
    return "Round won!";
  }
  else if ((player == 'rock' && computer == 'paper') ||
           (player == 'paper' && computer == 'scissors') ||
           (player == 'scissors' && computer == 'rock')){
    computerScore = computerScore+ +1;
    if (computerScore === 5 && playerScore < computerScore) {
    alert('You lost the game!')
  }
    score.textContent = `Player:${playerScore}  Computer:${computerScore}`;
    round.textContent = 'Round lost!';
    return 'Round lost!';
  }
  else {
    return 'Not a choice!'
  };
  
}