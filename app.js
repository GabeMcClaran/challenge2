var points = 0;
var squirrels = 0;
var pointsps = 0;
var cats = 0;
var squirrelCost = 0;
function walkDog() {
  points += 1;
  document.getElementById("score").innerHTML = points.toString();
}

// function runButton() {
//   if (points >= 10) points -= 10;
//   points = points += 2;

//   document.getElementById("score").innerHTML = points;
// }

function squirrelButton() {
  if (points >= 50 + squirrels * 5) {
    points -= 50;
    // stepsps += 1;

    squirrels += 1;
    pointsps += 1;
    squirrelCost = 50 + squirrels * 5;
    document.getElementById("score").innerHTML = points.toString();
    document.getElementById("squirrelstep").innerHTML =
      squirrels + " SQUIRRELS " + squirrelCost + " steps";
  }
  setInterval(function() {
    points += pointsps;
    document.getElementById("score").innerHTML = points.toString();
  }, 2000);
}
function catButton() {
  if (points >= 100 + cats * 10) {
    points -= 100 + cats * 10;
    // stepsps+= 1;

    cats += 1;
    pointsps += 5;
    catscost = 100 + cats * 10;
    document.getElementById("score").innerHTML = points.toString();
    document.getElementById("catstep").innerHTML =
      cats + " CAT!!!! " + catscost + " Steps";
  }

  setInterval(function() {
    points += pointsps;
    document.getElementById("score").innerHTML = points.toString();
  }, 2000);
}

// start cheese below here
