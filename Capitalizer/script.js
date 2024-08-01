let readlinesync = require('readline-sync');

let name = readlinesync.question("Enter Your Name: ");

name = name[0] === name[0].toLowerCase() ? name[0].toUpperCase() + name.slice(1) : name;

console.log(name);