function play() {
    addClass('home-screen');
    removeClass('play-ground');

    const alphabet = randomAlphabetGenerator();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // currentAlphabet.innerText = '/';

    // const letter = addClass('bg-orange-400');
    letterColoredBg(alphabet);
    console.log(10, alphabet);
}






// function for adding class
function addClass(elementId) {
    const classElement = document.getElementById(elementId);
    classElement.classList.add('hidden');
}
// function for removing class
function removeClass(elementId) {
    const classElement = document.getElementById(elementId);
    classElement.classList.remove('hidden')
}
// function for generating random alphabet
function randomAlphabetGenerator() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabetArray = alphabetString.split('');

    // random number getting code
    const randomAlphabetNumber = Math.random() * alphabetArray.length - 1;
    const randomAlphabet = Math.round(randomAlphabetNumber);
    const alphabetIndex = alphabetArray[randomAlphabet];

    // console.log(alphabetIndex, randomAlphabet);
    return alphabetIndex;

}
// function for set the bg color of keyboard matched with screen letter.
function letterColoredBg(alphabet) {
    const letter = document.getElementById(alphabet);
    console.log(45, alphabet, letter);

    // letter.classList.add('bg-orange-400');

    letter.style.backgroundColor = 'orange';
    // const coloredLetterBg = addClass('bg-orange-400');
}