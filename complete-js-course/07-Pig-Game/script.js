'use strict';

// Selecting player total score elements
const totalScore0 = document.querySelector('#score--0');
const totalScore1 = document.getElementById('score--1');

// Selecting player current score elements
const score0 = document.getElementById('current--0');
const score1 = document.getElementById('current--1');

// Selecting player elements
const players = document.querySelectorAll('.player');
const player0 = players[0];
const player1 = players[1];


// to access the dice element
const dice = document.querySelector('.dice');


// Selecting all the button elements
const resetGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer;

function initCondition() {

    // reset all visual indicator to initial state
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner', 'player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
    
    
    // Enable button back
    rollDiceBtn.disabled = false;
    holdBtn.disabled = false;

    // Set the total score to 0
    totalScore0.textContent = 0;
    totalScore1.textContent = 0;

    // Set the current score to 0
    score0.textContent = 0;
    score1.textContent = 0;
    
    
    // remove the dice momentarily till a player roll.
    dice.classList.add('hidden');
    

    // the total score of both players
    scores = [0, 0];
    
    // Current score of active player
    currentScore = 0;
    
    // active player 
    activePlayer = 0;
}

initCondition();


const switchPlayer = function() {
    
    // Set current score to active player current score to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // Switch to the next player
    activePlayer = activePlayer === 0 ? 1 : 0;
        
    // Switch the player visually.
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
            
            
    // Set the currenyt score of that nexplayer to 0
    currentScore = 0;
}




// Rolling Dice

rollDiceBtn.addEventListener('click', () => {
    // generate a random dice roll
    const rolledDice = Math.floor(Math.random() * 6) + 1;

    // Display dice on the screen
    dice.classList.remove('hidden');
    dice.src = `./asset/dice-${rolledDice}.png`;


    // Check if rolled is 1, if true switch to next player
    if (rolledDice !== 1) {
        // Add dice to the current score;
        currentScore += rolledDice;

        // Set current score to active player current score
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } 

    else switchPlayer();

});


holdBtn.addEventListener('click', () => {

    // add the active player current score this total score.
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    // set current score of active player to 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;


    // Finish game if the active player has already accumulated 100 points
    if (scores[activePlayer] >= 100) {
  
        // set winner class on player with > 100 points
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

        // Remove the dice and disable all buttons.
        dice.classList.add('hidden');
        rollDiceBtn.disabled = true;
        holdBtn.disabled = true;
    }


    else switchPlayer();
});



resetGameBtn.addEventListener('click', initCondition);
