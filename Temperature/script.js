let readlinesync = require('readline-sync');

let temperature = parseFloat(readlinesync.question("Enter the temperature in celsius: "));

console.log("The temperature in celsius: ",temperature);

let Fahrenheit = temperature * 9/5 + 32;

console.log("The temperature in Fahrenheit: ", Fahrenheit);