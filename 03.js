//Program to find the square root.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Enter a number: ', (n) => {
    n = +n;
    const result = Math.sqrt (n);
    console.log (`Square root of ${n} is ${result}`);
    rl.close();
});