//Program to find the Largest among three nums

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first num: ', (n1) => {
    rl.question('Enter second num: ', (n2) => {
        rl.question('Enter third num: ', (n3) => {
            n1 = +n1;
            n2 = +n2;
            n3 = +n3;

            if(n1 > n2 && n1 > n3){
                console.log(`${n1} is the Largest`);
            }
            else if(n2 > n1 && n2 > n3){
                console.log(`${n2} is the Largest`);
            }
            else {
                console.log(`${n3} is the Largest`);
            }

            rl.close();
        });
    });
});