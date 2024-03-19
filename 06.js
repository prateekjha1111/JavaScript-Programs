//Program to check if a num is positive, negative, or zero.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (n) => {
    n = +n;
    if(n > 0){
        console.log('Positive');
    }
    else if(n < 0){
        console.log('Negative');
    }
    else {
        console.log ('Zero');
    }
    rl.close();
});