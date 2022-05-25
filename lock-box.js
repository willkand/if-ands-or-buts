const prompt = require('prompt-sync')({sigint: true});

let pinCode = 1234

pinCode = Number(prompt("Enter your $ digit pin code: "));

if (pinCode === 1234){
    console.log("Success!");
} else if (pinCode !== 1234){
    console.log("Failure!");
}