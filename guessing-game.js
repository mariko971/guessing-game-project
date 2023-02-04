const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let secretNumber;

// Get random integer between two values.
const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// function to check the user input value against the 'secretNumber.
const checkGuess = (num) => {
  if (num > secretNumber) {
    console.log("Too high");
    return false;
  }
  if (num < secretNumber) {
    console.log("Too low");
    return false;
  }
  console.log("Correct");
  return true;
};

//Function takes the user's guess value and passes it to the 'checkGuess' function.
const askGuess = () => {
  rl.question("Enter a guess: ", (ans) => {
    let isTrue = checkGuess(Number(ans));
    if (isTrue) {
      console.log("You win!");
      rl.close();
    } else {
      askGuess();
    }
  });
};

// Function prompts user to input max and min values for range, assigns 'secretNumber' random value
// within that range and calls the 'askGuess' function.
const askRange = () => {
  rl.question("Enter a max number: ", (max) => {
    rl.question("Enter a min number: ", (min) => {
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      secretNumber = randomInRange(Number(min), Number(max));
      askGuess();
    });
  });
};

askRange();
