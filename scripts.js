//////////////////////////
// Vanilla js algorithm //
//////////////////////////

document.addEventListener('click', (e) => {
  const diceList = document.querySelectorAll('.dice');
  const resultBox = document.getElementById('result');
  if (e.target.matches('#button-roll')) {
    diceList.forEach((el) => {
      diceValue = roll();
      el.dataset.value = diceValue;
      elClass = numToCssClass(+diceValue);
      el.classList.toggle('dice-rotate');
      Array.from(el.getElementsByTagName('div')).forEach((div) => {
        div.classList.remove(
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'initial'
        );
        div.classList.toggle(elClass);
      });
    });
    resultBox.innerHTML = `You got <strong>${calculateScore()}</strong> points!`;
  }
});

const numToCssClass = (number) => {
  return number === 1
    ? 'one'
    : number === 2
    ? 'two'
    : number === 3
    ? 'three'
    : number === 4
    ? 'four'
    : number === 5
    ? 'five'
    : number === 6
    ? 'six'
    : 'err';
};
const roll = () => {
  return Math.floor(Math.random() * 6 + 1);
};
const getDiceValues = () => {
  values = [];
  diceElements = document.querySelectorAll('.dice');
  diceElements.forEach((el) => {
    values.push(el.dataset.value);
  });
  return values;
};
const normalScore = (diceValue) => {
  return diceValue == '1' ? 100 : diceValue == '5' ? 50 : 0;
};
const calculateScore = () => {
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
};
/////////////////////////////////////
// Same algorithm but with jQuery! //
/////////////////////////////////////

// $('#button-roll').click(function () {
//   const dice = $('.dice');
//   dice.toggleClass('dice-rotate');
//   dice.each(function () {
//     diceValue = roll();
//     $(this).attr('data-value', diceValue);
//     diceClass = numToCssClass(+diceValue);
//     $(this)
//       .children('.dice-point')
//       .removeClass(['one', 'two', 'three', 'four', 'five', 'six'])
//       .toggleClass(diceClass);

//     $('#result').html(
//       "You've got <strong>" + calculateScore() + '</strong> points!'
//     );
//   });
// });
