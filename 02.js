//Program to add two numbers.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    num1 = +num1; // Convert input to a number
    num2 = +num2; // Convert input to a number

    const sum = num1 + num2;
    console.log(`Sum of ${num1} & ${num2} is ${sum}`);
    rl.close();
  });
});
