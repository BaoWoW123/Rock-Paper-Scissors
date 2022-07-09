const choices = ['rock','paper','scissors'];
const random = Math.floor(Math.random() * choices.length);
  
    function computerPlay(){
    return (choices[random]);
};

let playerSelection= prompt('Pick');
let player = playerSelection.toLowerCase();

function game() {
  if (playerSelection.toLowerCase() == computerPlay()){
    return 'Tie!'
  }
  else  if ((player == 'rock' && computerPlay() =='scissors') ||
           (player == 'scissors' && computerPlay() == 'paper') ||
           (player == 'paper' && computerPlay() == 'rock')) {
    return "You won!"
  }
  else if ((player == 'rock' && computerPlay() == 'paper') ||
           (player == 'paper' && computerPlay() == 'scissors') ||
           (player == 'scissors' && computerPlay() == 'rock')){
    return 'You lost!';
  }
  else {
    return 'Not a choice!'
  };
}
console.log(computerPlay());

console.log(game());

