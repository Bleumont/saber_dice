document.addEventListener('click', (e) => {
  const diceList = document.querySelectorAll('.dice');
  if (e.target.matches('#button-roll')) {
    diceList.forEach((el) => {
      el.innerHTML = roll();
      el.classList.remove('1', '2', '3', '4', '5', '6');
      el.classList.toggle(`${el.textContent}`);
    });
    console.log(calculateScore());
  }
});
function roll() {
  return Math.floor(Math.random() * 6 + 1);
}
function getDiceValues() {
  values = [];
  diceElements = document.querySelectorAll('.dice');
  diceElements.forEach((el) => {
    values.push(el.textContent);
  });
  return values;
}

function calculateScore() {
  let score = 0;
  [dice1, dice2, dice3] = getDiceValues();

  normalScore = (diceValue) => {
    switch (diceValue) {
      case 1:
        score += 100;
        break;
      case 5:
        score += 50;
        break;
      default:
        break;
    }
  };
  [...getDiceValues()].forEach((el) => {
    normalScore(+el.textContent);
  });

  return dice1 + dice2 + dice3 == 3
    ? 1000
    : (dice1 + dice2 + dice3) / dice1 == dice1
    ? dice1 * 100
    : score;
}
