function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

// function getARandomAlphabet() {
//     // step 1: get or generate a alphabet string
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');

//     // step 2: get a random index 0 - 25(cause 26letter)
//     const random = Math.random() * 25;
//     const index = Math.round(random);

//     const alphabet = alphabets[index];
//     console.log(alphabet);
//     return alphabet;
// }

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    const alphabet = alphabets[index];

    return alphabet;
}