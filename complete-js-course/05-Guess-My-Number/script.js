'use strict';



// An easy way of selecting an element in js
// use the textContent property to get the text of an element.



// DOM and DOM Manipulation.
// DOM is a structured representation of HTML documents. It allow js to access html element and styles to manipulate them. 




// Events and Handling Click event.
// An event is something that happens on the page. We can use the event listener to listen for an event to happen.





const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const attempts = document.querySelector('.score');
const number = document.querySelector('.number');
const fastestAttempt = document.querySelector('.highscore');


let score = 5;
let highScore = 5;

function generateNumber() {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    return randomNumber;
}

function changeProps(text, bgColor, disable) {
    message.textContent = text;
    document.body.style.backgroundColor = bgColor;
    checkBtn.disabled = disable;
    input.disabled = disable;
}

let randomNumber = generateNumber();


// When the check btn is clicked
checkBtn.addEventListener('click', function() {

    // get the input field value
    let guess = input.value;

    // set an initial score to 0
    let currentScore = 0;
    


    // a conditional to execute if guess is higher or lower than random number.
    guess > randomNumber ? changeProps('📈Guess is too high') : changeProps('📉Guess is too low');


    // if number doesn't pass the above the statement - we check if the guess is equal to the random number and execute some command.
    if (guess == randomNumber) {
        changeProps('👏You are correct', '#60b347', true);
        number.textContent = randomNumber;


        currentScore = 6 - score;

        fastestAttempt.textContent = highScore < currentScore ? highScore : highScore = currentScore;

        randomNumber = generateNumber();
    }



    // Finally, we check if user have exhausted their attempts.
    else if (score < 2) {
        changeProps('😞You lost, try again', '#f53b3b', true);
        randomNumber = generateNumber();
    }

    
    score -= 1;
    attempts.textContent = score;

});






resetBtn.addEventListener('click', function() {
    changeProps('Start guessing...', '#222', false);
    input.value = '';
    score = 5;
    attempts.textContent = score;
    number.textContent = "?";

    randomNumber = generateNumber();

});









