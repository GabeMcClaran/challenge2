var points = 0;
var pointsps = 0;
var cats = 0;
var timerSet = false;
var clickablePoints = 0;

let autoUpgrades = {
  run: {
    increment: 1
  },
  squirrels: {
    price: 20,
    quantity: 0,
    multiplier: 5
  },
  cats: {
    price: 30,
    quantity: 0,
    multiplier: 10
  }
};

let clickUpgrades = {
  run: {
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  toy: {
    price: 10,
    quantity: 0,
    multiplier: 2
  }
};

function walkDog() {
  if (clickUpgrades.run.quantity > 0) {
    points += clickUpgrades.run.quantity;
  }
  if (clickUpgrades.toy.quantity > 0) {
    points += clickUpgrades.toy.quantity * 2;
  }
  points += autoUpgrades.run.increment;

  // these dont work like should on click, work all the time?
  // points += clickUpgrades.toy.quantity;
  // points += clickUpgrades.run.quantity;
  document.getElementById("score").innerHTML = points.toString();
}

// function runButton() {
//   if (points >= 10) points -= 10;
//   points = points += 2;

//   document.getElementById("score").innerHTML = points;
// }

// this function increases the steps by 1 ever second
function squirrelButton() {
  if (!timerSet) {
    setMyInterval();
    timerSet = true;
  }

  var mySquirrels = autoUpgrades.squirrels;
  // console.log("Clicked squirrelButton"); testing to see if function works
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

// this function increases the step by 2 every second

function catButton() {
  if (!timerSet) {
    setMyInterval();
    timerSet = true;
  }
  var myCats = autoUpgrades.cats;
  // console.log("clicked catButton"); testing to see if function works
  if (points >= myCats.price) {
    points -= myCats.price;
    myCats.quantity++;
    pointsps += 2;

    myCats.price += myCats.multiplier;
    document.getElementById("score").innerHTML = points.toString();
    document.getElementById("catstep").innerHTML =
      myCats.quantity + " CAT!!!! " + myCats.price + " Steps";
  }
}

function setMyInterval() {
  setInterval(function() {
    points += pointsps;
    document.getElementById("score").innerHTML = points.toString();
  }, 2000);
}

// this function increases the clickcount by 2

function toyButton() {
  var myToy = clickUpgrades.toy;
  if (points >= myToy.price) {
    points -= myToy.price;
    myToy.quantity++;

    myToy.price += myToy.quantity;

    document.getElementById("score").innerHTML = points.toString();
    document.getElementById("tosstoy").innerHTML =
      myToy.quantity + " Toy Thrown " + myToy.price + " Steps";
  }
}

// this function increases clicks by 1

function runButton() {
  var myRun = clickUpgrades.run;
  if (points >= myRun.price) {
    points -= myRun.price;
    myRun.quantity++;

    myRun.price += myRun.quantity;

    document.getElementById("score").innerHTML = points.toString();
    document.getElementById("run").innerHTML =
      myRun.quantity + " Runs Taken " + myRun.price + " Steps";
  }
}
