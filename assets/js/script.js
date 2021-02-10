
//Wait for the DOM to finish loading before running the game
//Get buttons elements and add event listener to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName('button');

  for(let button of buttons) {
    button.addEventListener('click', function() {
      if(this.getAttribute('data-type') === 'submit') {
        checkAnswer();
      } else {
        let gameType = this.getAttribute('data-type');
        runGame(gameType);
      }
    })
  }

// allow user to submit answer with enter tab
  document.getElementById('answer-box').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        checkAnswer();
      }
  })

  runGame('addition');
})

function runGame(gameType) {

  // generate two random numbers that return whole number

  	let a = Math.floor(Math.random() * 12) + 1;
    let b = Math.floor(Math.random() * 12) + 1;
    let numD1 = (a * b);
    let numD2 = b;

  // Generate two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  

  document.getElementById('answer-box').value = '';
  document.getElementById('answer-box').focus();

  if(gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === 'multiply'){
    displayMultiplyQuestion(num1, num2);
  } else if(gameType === 'subtract') {
    dispalySubtractQuestion(num1, num2);
  } else if(gameType === 'division') {
    displayDividingQuestion(numD1, numD2);
  }
}

function checkAnswer() {

  // Checks the answer against the first element in 
  // the returned calculateCorrectAnswer array

  let userAnswer = parseInt(document.getElementById('answer-box').value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if(isCorrect) {
    // alert('Hey! you got it right! 😄');
     
     incrementScore();
     moveRight();
    
  } else {
    // alert(`Awwww .... you answered ${userAnswer}. the correct answer was ${calculatedAnswer[0]} 😟`);
    incrementWrongAnswer();
    moveWrong();
  }

  runGame(calculatedAnswer[1]);
 
}


function moveRight() {
  let theImg = document.getElementById('myImg');
  let msg = document.getElementById('message');
  theImg.classList.remove('fade-in');
  void theImg.offsetWidth; 
  theImg.classList.toggle('fade-in');
  msg.classList.remove('fade-in');
  void msg.offsetWidth; 
  msg.classList.toggle('fade-in');
  
  
}

function moveWrong() {
  let secImg = document.getElementById('otherImg');
  let wrongMsg = document.getElementById('wrongmsg');
  secImg.classList.remove('fade-in');
  void secImg.offsetWidth; 
  secImg.classList.toggle('fade-in');
  wrongMsg.classList.remove('fade-in');
  void wrongMsg.offsetWidth; 
  wrongMsg.classList.toggle('fade-in');
}



function calculateCorrectAnswer() {

  // Gets the operands (the numbers) and the operator (plus. minus etc)
  // directly from the DOM

  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = document.getElementById('operator').innerText;

  if(operator === '+') {
    return [operand1 + operand2, 'addition'];
  } else if(operator === 'x'){
    return [operand1 * operand2, 'multiply'];
  } else if(operator === '-') {
    return [operand1 - operand2, 'subtract'];
  } else if(operator === '/') {
    return [parseInt(operand1 / operand2),'division'];
  }
}

function incrementScore() {
   let oldScore = parseInt(document.getElementById('score').innerText);
   document.getElementById('score').innerText = ++oldScore;

}

function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
   document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function dispalySubtractQuestion(operand1, operand2) {
  // display opernad1 bigger thaf operand2
  
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDividingQuestion(operand1,operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '/';
}


