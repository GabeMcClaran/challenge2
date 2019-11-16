var points = 0;
var pointsps = 0;
var cats = 0;
var timerSet = false;

let clickUpgrades = {
  run: {
    increment: 1
  },
  squirrels: {
    price: 10,
    quantity: 0,
    multiplier: 5
  },
  cats: {
    price: 5,
    quantity: 0,
    multiplier: 1
  }
};

function walkDog() {
  points += clickUpgrades.run.increment;
  document.getElementById("score").innerHTML = points.toString();
}

// function runButton() {
//   if (points >= 10) points -= 10;
//   points = points += 2;

//   document.getElementById("score").innerHTML = points;
// }

function squirrelButton() {
  if (!timerSet) {
    setMyInterval();
    timerSet = true;
  }

  var mySquirrels = clickUpgrades.squirrels;
  console.log("Clicked squirrelButton");
  if (points >= mySquirrels.price) {

    points -= mySquirrels.price;
    mySquirrels.quantity++;

    pointsps += 1;

    mySquirrels.price += mySquirrels.multiplier;

    document.getElementById("score").innerHTML = points.toString();
    document.getElementById("squirrelstep").innerHTML =
      mySquirrels.quantity + " SQUIRRELS " + mySquirrels.price + " steps";
  }
}

function catButton() {
  if (!timerSet) {
    setMyInterval();
    timerSet = true;
  }

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
}

function setMyInterval() {
  setInterval(function () {
    points += pointsps;
    document.getElementById("score").innerHTML = points.toString();
  }, 2000);
}
// start cheese below here
