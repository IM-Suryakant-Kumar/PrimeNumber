const readlinesync = require("readline-sync");
const chalk = require("chalk");
const gradient = require("gradient-string");
const info = chalk.red.bold;

const userName = readlinesync.question(chalk.greenBright("Enter Your Name : "));
console.log(gradient.rainbow(`Welcome ${userName}`));

let dob = readlinesync.question(chalk.greenBright(`Enter Your birth-date in DD/MM Format : `));
dob = dob.replace("/", "");

let userDD = dob.substring(0, 2);
let userMM = dob.substring(2, 4);

if(isNaN(userDD) || isNaN(userMM)){
    console.log(info("Invalid input! ❌"));
    return;
}

if (userDD <= 0 || userDD > 31) {
  console.log(info("Invalid DD! ❌"));
} else if (userMM <= 0 || userMM > 12) {
  console.log(info('invalid MM! ❌'));
} else if(userDD > 29 && userMM == 2) {
    console.log(info('Invalid date! ❌'));
} else {
    dob = parseInt(dob);
    checkPrime(dob);
}


function checkPrime(num){

    let i = 2;
    while(i * i <= num){
        if(num % i === 0){
            console.log(gradient.rainbow(`${userName}, your birth number is not prime`));
            return;
        }
        i++;
    }
    console.log(gradient.rainbow(`${userName}, your birth number is prime`));
    console.log(gradient.summer(`${userName}, don't hesitate to take a snap and share it on your social handles`));
}
