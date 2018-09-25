class Game
{
  constructor(missed)
  {
      this.missed = missed;
      this.phrases = this.getPhrases();
      this.phrase = null;
  }

  /**
   * Fills the this.phrases array with 20 phrases.
   * @return  {array}   An array of phrases.
   */
  getPhrases()
  {
    return [
      'Calm Before The Storm',
      'I Spy With My Little Eye',
      'Two Peas In A Pod',
      'Bull In A China Shop',
      'A Chip On Your Shoulder',
      'A Dime A Dozen',
      'Piece Of Cake',
      'Beating A Dead Horse',
      'Break The Ice',
      'Close But No Cigar',
      'Down To The Wire',
      'Elephant In The Room',
      'Fools Gold',
      'Go For Broke',
      'Go Out On A Limb',
      'Jack Of All Trades',
      'Jump The Gun',
      'My Cup Of Tea',
      'Neck And Neck',
      'No Questions Asked'
    ];
  }

  /**
   * Randomly retrieves one of the phrases stored in the phrases array.
   * @return  {string}   A randomly chosen string.
   */
  getRandomPhrase()
  {
    const randomIndex = Math.floor(Math.random() * ((this.phrases.length - 1) + 1));
    return this.phrases[randomIndex];
  }

  /**
   * Checks to see if the button clicked by the player matches a letter in the phrase.
   */
  handleInteraction()
  {
    const isAlpha = str => /^[a-zA-Z]+$/.test(str);
    const toggleColor = item => {
      item.transition = 'background-color 100ms ease-in';
      item.backgroundColor = 'lightblue';
      setTimeout(() => {item.backgroundColor = '#e5e5e5'}, 100);
    }
    const colorAndVerify = (condition, attribute) =>
    {
      if (condition)
      {
        toggleColor(document.querySelector(`#${attribute}`).style);
        this.phrase.checkLetter(attribute, toggleColor) ?
          this.checkForWin() : this.removeLife();
      }
    }

    document.querySelector('#qwerty').addEventListener('click', (event) =>
       colorAndVerify(event.target.className === 'key', event.target.textContent));

    document.addEventListener('keypress', (event) =>
       colorAndVerify(isAlpha(event.key) === true, event.key));
  }

  /**
   * Removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
   */
    removeLife()
    {
      const tries = document.querySelectorAll('.tries img[src="images/liveHeart.png"]');
      const lostLife = tries[tries.length-1];
      // lostLife.src = 'images/lostHeart.png';
      if(tries.length > 1){
        lostLife.src = 'images/lostHeart.png';
      } else{
        lostLife.src = 'images/lostHeart.png';
        this.gameOver('lose');
      }
    }

  /**
   * Checks to see if the player has selected all of the letters..
   */
  checkForWin()
  {
    const blanks = document.querySelectorAll('.hide');
    if (blanks.length <= 0)
      this.gameOver('win');
  }

  /**
   * Displays a message if the player wins or a different message if they lose.
   */
  gameOver(gameOver)
  {
    gameOver === 'win' ?
      setTimeout(() => {alert('YOU WIN!!!');}, 100)              :
      setTimeout(() => {alert('BETTER LUCK NEXT TIME!!!');}, 100);
  }

  /**
   * Calls the getRandomPhrase() method, and adds that phrase to the board
   * by calling the Phrase class' addPhraseToDisplay() method.
   */
  startGame()
  {
    const randomPhrase = this.getRandomPhrase();
    this.phrase = new Phrase(randomPhrase);
    this.phrase.addPhraseToDisplay();
    this.handleInteraction();
    console.log(this.phrase);
  }

}
