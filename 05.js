//Program to swap two variables.

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Enter first num: ', (n1) =>{
    rl.question ('Enter second num: ', (n2) =>{
        console.log (`Before swapping n1 is ${n1} & n2 is ${n2}`);
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        
        n1 = n1 + n2;
        n2 = n1 - n2;
        n1 = n1 - n2;
        
        console.log (`After swapping n1 is ${n1} & n2 is ${n2}`);
        rl.close();
    });
});
