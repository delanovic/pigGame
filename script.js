
let scores, roundScore, activePlayer, gamePlaying;


init();


//document.querySelector("#current--" + activePlayer).textContent = dice;



let diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', () => {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;

        //Display the result
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //Update

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector("#current--" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer()
        }

    } else {
        document.querySelector(".new-game").style.display = "block";
    }

})

document.querySelector('.btn--hold').addEventListener('click', () => {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        let input = document.querySelector('.winning-point').value;
        let winningScore;
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
            diceDOM.style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('winner');
            document.querySelector('.player--' + activePlayer).classList.remove('active')
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }



});



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current--0").textContent = '0';
    document.getElementById("current--1").textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    diceDOM.style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;


    document.querySelector(".new-game").style.display = "none";
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.remove('active');
    document.querySelector('.player--0').classList.add('active');
}








