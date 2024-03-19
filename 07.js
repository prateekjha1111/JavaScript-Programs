//Program to check if a num is Even or Odd.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (n) => {
    n = +n;
    if(n % 2 === 0){
        console.log(`${n} is Even`);
    }
    else {
        console.log(`${n} is Odd`);
    }

    rl.close();
});