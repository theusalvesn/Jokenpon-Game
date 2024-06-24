let jokenpoMoves = ['rock','scissor','paper'];
let oponentRandomMove = randomMove();
let userInput = document.querySelector('input').value;
let cont = 0;

function displayMessage(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function gameTitleText(){
    displayMessage('h1','Please choose your hand: rock, paper, or scissors.')
}

// get the move to the computer
function randomMove(){
    return jokenpoMoves[ parseInt( Math.random() * jokenpoMoves.length ) ];
}

gameTitleText()
displayMessage('button', 'Jokenpo !')

function checkMove() {
    // Get the player Choice Value.
    
    let playerChoice = document.querySelector('input[name="choice"]:checked');

    if (cont == 1){
        resetGame()
        cont = 0;
        return
    }
        cont++

    if (!playerChoice) {
        displayMessage('.container__text', 'Please, Select your Hand!!')
        return;
    }

    let playerValue = playerChoice.value;
    let computerValue = oponentRandomMove;

    // Result of the game.
    let resultMessage = '';
    if (playerValue === computerValue) {
        resultMessage = '...Its a tie.!';
    } else if (
        (playerValue === 'rock' && computerValue === 'scissor') ||
        (playerValue === 'scissor' && computerValue === 'paper') ||
        (playerValue === 'paper' && computerValue === 'rock')

    ) {
        resultMessage = 'Congratulations, You Win!';
        changeImageComputer('img/pc_enemy_lose.png')
    } else {
        resultMessage = 'HAHAHA, Game over!';
    }

    //  Displat the result on h1 or .container-text.
    displayMessage('.container__text', `Computer Choice: ${computerValue} ${resultMessage}`);
    displayMessage('button', 'New round')
    playerChoice.checked = false;
}

function resetGame(){
  
    oponentRandomMove = randomMove();
    gameTitleText()
    displayMessage('button', 'Jokenpo !')
    changeImageComputer('img/pc_enemy.png')
}


function changeImageComputer(imageSrc) {
    document.getElementById('pc-enemy_id ').src = imageSrc;
}
