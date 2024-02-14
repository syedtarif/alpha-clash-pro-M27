// function play() {
//     // step 1: hide the home screen. for doing this, add the hidden class to home screen section.
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // sep 2: show the play ground.
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     console.log(playGround.classList);
// }

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}