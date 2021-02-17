$('#button-roll').click(function () {
  const dice1 = roll();
  const dice2 = roll();

  $('#dice1').html(dice1);
  $('#dice2').html(dice2);

  let points = 0;

  if (dice1 == 1) {
    points += 100;
  }

  if (dice2 == 1) {
    points += 100;
  }

  if (dice1 == 5) {
    points += 50;
  }

  if (dice2 == 5) {
    points += 50;
  }

  $('#result').html("You've got " + points + ' points!');
});

function roll() {
  return Math.floor(Math.random() * 6);
}
