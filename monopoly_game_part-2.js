// Monopoly Game Part 2
// Example of a VERY simple Monopoly game simulation

let squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
];

// ----------------------  Step 1  -----------------------
// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
    this.hasCash = true;
  }

  // Method move
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      this.hasCash = false;
      console.log(`Game over for ${this.name}.`);
    }
  }

  // Method displayInfo
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}€`
    );
  }
}

// --- Initialization of players ---
let player1 = new Player("Joaquim", "red");
let player2 = new Player("Maxence", "blue");
let player3 = new Player("Mostafa", "black");

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// ---------------------  Step 2  --------------------------

class Game {
  constructor() {
    // --- Initialization of players ---
    let player1 = new Player("Carol", "blue");
    let player2 = new Player("Carlos", "black");
    let player3 = new Player("Marco", "red");

    this.players = [player1, player2, player3];
    this.turn = 1;
  }

  play() {
    while (this.players.length > 1) {
      console.group();
      console.log(`Turn ${this.turn}`);
      this.players.forEach((palyer) => {
        palyer.move();
        palyer.displayInfo();
      });
      this.players = this.players.filter((palyer) => palyer.hasCash);
      console.groupEnd();
    }
    console.log(`Player ${this.players[0].name} has won!`)
  }
}

const game = new Game();
game.play();
