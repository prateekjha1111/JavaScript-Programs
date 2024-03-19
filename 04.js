//Program to calculate the area of a triangle.

const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Enter base: ', (b) => {
    rl.question ('Enter height: ', (h) =>{
        const area = (b * h) / 2;
        console.log (area);
        rl.close();
    });
});