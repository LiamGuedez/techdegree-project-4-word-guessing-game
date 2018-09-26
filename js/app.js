/**
* Hides the start screen overlay.
*/
const resetDisplay = () =>
{
    const startButton = document.querySelector('#btn__reset');
    const startScreen = document.querySelector('#overlay');
    startButton.addEventListener('click', () => startScreen.style.display = 'none');
}

/**
* This function is called when a player selects a letter.
* It disables the button on the onscreen keyboard,
* and calls the handleInteraction() method of the Game class.
* @param   {Object}    game - The game that's being played.
*/
const markButton = game =>
{
  const isAlpha = str => /^[a-zA-Z]+$/.test(str);
  const disableButton = button =>
  {
    document.querySelector(`#${button}`).disabled = true;
    document.querySelector(`#${button}`).style.color = '#e5e5e5';
  }

  document.querySelector('#qwerty').addEventListener('click', (event) =>
  {
    if (event.target.className === 'key')
    {
       game.handleInteraction(event.target.className === 'key', event.target.textContent);
       disableButton(event.target.textContent);
    }
  });

  document.addEventListener('keypress', (event) =>
  {
    if ((isAlpha(event.key) && (!document.querySelector(`#${event.key}`).disabled)))
    {
      game.handleInteraction(true, event.key);
      disableButton(document.querySelector(`#${event.key}`).textContent);
    }
  });
}

resetDisplay();
const gameObject = new Game();
markButton(gameObject);
gameObject.startGame(true);
