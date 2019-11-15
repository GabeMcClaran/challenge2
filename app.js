var points = 0;

function runButton() {
  if (points >= 10) points -= 10;
  document.getElementById("score").innerHTML = points;
}

function walkDog() {
  points += 1;
  document.getElementById("score").innerHTML = points;
}
