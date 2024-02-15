// function play() {
//     // step 1: hide the home screen. for doing this, add the hidden class to home screen section.
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // sep 2: show the play ground.
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     console.log(playGround.classList);
// }

function handleKeyboardButtonPress(event) {
    // player pressed key
    const playerPressed = event.key;
    // console.log(playerPressed, 'player pressed this key')

    // stop the game if player pressed "Esc"
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // expected key pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase(); //lowercase used for getting the same type of output like player pressed type.

    // checking player pressed = current alphabet matched or not
    if (playerPressed === expectedAlphabet) {
        const currentScore = getElementValueById('current-score');

        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // -------------------------------
        /**update score*/
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore, typeof currentScore);

        // // 2. increase the score by o1
        // const newScore = currentScore + 1;
        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    } else {
        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;

        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

        // ---------------------------
        /**lifeline reduction*/
        // 1. get the current lifeline score
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2. reduce the life count
        // const remainLifeCount = currentLife - 1;
        // // 3. display the update life count
        // currentLifeElement.innerText = remainLifeCount;

        // console.log('fail');
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // step 1: generate a random alphabet.
    const alphabet = getARandomAlphabet();

    // step 2: show generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // step 3: ste background color
    setBackgroundColorById(alphabet);
}

/**another way to hidden the section using extra function */
function play() {

    // hide all except play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)

    continueGame();
}

function gameOver() {
    showElementById('final-score');
    hideElementById('play-ground');

    //update final score
    const lastScore = getElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    // clear the last highlighted alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}