const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let secretNumber = 5;

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

askGuess();
