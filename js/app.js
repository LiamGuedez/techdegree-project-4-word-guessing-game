/**
 * Checks if there a winner on the board after each token drop.
 * @param   {Object}    target - Targeted space for dropped token.
 * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
 * @return  {array}     An array of two player objects.
 */

document.getElementById('btn__reset').addEventListener('click', () => document.getElementById('overlay').style.display = 'none');

// const phraseObject = new Phrase('I? like? cake!');
// phraseObject.addPhraseToDisplay();
// phraseObject.checkLetter();
const gameObject = new Game();
gameObject.startGame();
