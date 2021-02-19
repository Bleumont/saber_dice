document.addEventListener('click', (e) => {
  const diceList = document.querySelectorAll('.dice');
  const resultBox = document.getElementById('result');
  if (e.target.matches('#button-roll')) {
    diceList.forEach((el) => {
      el.innerHTML = roll();
      el.classList.remove('1', '2', '3', '4', '5', '6');
      el.classList.toggle(`${el.textContent}`);
    });
    resultBox.innerHTML = `You got <strong>${calculateScore()}</strong> points!`;
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
const normalScore = (diceValue) => {
  return diceValue == '1' ? 100 : diceValue == '5' ? 50 : 0;
};
function calculateScore() {
  const [dice1, dice2, dice3] = getDiceValues();

  let score = 0;
  [...getDiceValues()].forEach((el) => {
    score += normalScore(el);
  });

  return +dice1 + +dice2 + +dice3 == 3
    ? 1000
    : +dice1 == +dice2 && +dice2 == +dice3
    ? +dice1 * 100
    : score;
}
