class Phrase
{
  constructor(phrase)
  {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Displays the constructor's phrase to the screen as a set of guessable characters.
   * Does this by converting this.phrase into a ul element, and appending it to the page.
   */
  addPhraseToDisplay()
  {
    const makeLis = () =>
    {
      return this.phrase
        .split('')
        .map(letter =>
        {
            return letter === ' ' ?
              `<li class="space"> </li>`                          :
              `<li class="hide letter ${letter}">${letter}</li>`;
        })
        .reduce((lisString, li) => lisString += li + '\n','');
      }
    const ul = document.createElement('ul');
    ul.innerHTML = makeLis();
    document.querySelector('#phrase').appendChild(ul);
 }

  /**
   * Checks if letter selected by player matches a letter in the hidden phrase.
   * If so, calls this.showMatchedLetter().
   * @param  {letter}  letter - Character to  be analyzed.
   * @return  {boolean}   Boolean value indicating whether the user selection matches (true) or not (false)
   */
  checkLetter(letter, toggleColor)
  {
    if (this.phrase.includes(letter)){
      this.showMatchedLetter(letter, toggleColor);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Reveals the letter(s) on the board that matches player's selection.
   * @param  {character}  letter - Character to display onscreen.
   */
  showMatchedLetter(letter, toggleColor)
  {
    const phrase = document.querySelectorAll(`.${letter}`);
    phrase.forEach(character =>
    {
      character.style.color = '#37474f';
      character.className = `letter ${letter}`;
      toggleColor(character.style);
    });
  }
}
