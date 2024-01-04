var minRange, maxRange, targetNumber;
var lives = 3;
var score = 0;

function newGame() {
    minRange = Math.floor(Math.random() * 90) + 1;
    maxRange = minRange + 10;

    document.getElementById('minRange').textContent = minRange;
    document.getElementById('maxRange').textContent = maxRange;

    targetNumber = Math.floor(Math.random() * 10) + minRange;
}

function checkGuess() {
    var userGuess = document.getElementById('guess').value;
    var messageElement = document.getElementById('message');
    var livesElement = document.getElementById('lives');
    var ScoreElement = document.getElementById('score');

    if (userGuess == targetNumber) {
        score = score + 100;
        ScoreElement.textContent = score;
        messageElement.textContent = '¡Felicidades! Has adivinado el número.';
        newGame();
    } else {
        lives--;
        livesElement.textContent = lives;

        if (lives === 0) {
            messageElement.textContent = '¡Oops! Te has quedado sin vidas. El número era ' + targetNumber + '. Tu puntaje final es ' + score + '.';
            document.getElementById('guessButton').disabled = true;
        } else {
            messageElement.textContent = 'Incorrecto. Inténtalo de nuevo.';
        }
    }
}

function messageAppear() {
    var modalElement = document.getElementById('modal');
    modalElement.className = 'block';
}

document.getElementById('clue1').addEventListener('click', function () {
    alert('Pista 1: El número está entre ' + (targetNumber - 5) + ' y ' + (targetNumber + 5) + '.');
});

document.getElementById('clue2').addEventListener('click', function () {
    alert('Pista 2: El número es ' + (targetNumber % 2 === 0 ? 'par' : 'impar') + '.');
});

document.getElementById('clue3').addEventListener('click', function () {
    alert('Pista 3: La suma de sus dígitos es ' + calculateDigitSum(targetNumber) + '.');
});

function calculateDigitSum(number) {
    return number.toString().split('').reduce(function (acc, digit) {
        return acc + parseInt(digit);
    }, 0);
}

newGame();
