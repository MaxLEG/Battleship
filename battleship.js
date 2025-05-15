let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess; // current guess
let guesses = 0; // number of guesses
let hits = 0;
let isSunk = false; // ship is destroyed?

while (isSunk == false) {
  guess = prompt("Where are you will shoot? (number 0 - 6)");
  if (guess < 0 || guess > 6 || guess == isNaN) {
    prompt("Please enter a valid number!");
  } else {
    guesses += 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits += 1;

      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS...");
    }
  }
}

const stats = `You took ${guesses} guesses to sink my battleship, which means you shooting accuracy was ${Math.min(
  (3 / guesses) * 100
).toFixed(1)})`;
alert(stats);
