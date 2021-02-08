
//Wait for the DOM to finish loading before running the game
//Get buttons elements and add event listener to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName('button');

  for(let button of buttons) {
    button.addEventListener('click', function() {
      if(this.getAttribute('data-type') === 'submit') {
        alert('You clicked Submit!');
      } else {
        let gameType = this.getAttribute('data-type');
        alert(`You clicked ${gameType}`);
      }
    })
  }
})

function runGame() {

  // Generate two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function dispalySubtractQuestion() {

}

function displayMultiplyQuestion() {

}