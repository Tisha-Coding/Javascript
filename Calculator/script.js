let readlinesync = require('readline-sync');

let num1 = parseFloat(readlinesync.question("Please enter the first number: "));

let num2 = parseFloat(readlinesync.question("Please enter the second number: "));

let operator = readlinesync.question("Please enter a valid operator ('+','-','*','/') : ");


let result;

switch(operator)
{
    case '+':
        result = num1+num2;
        break;
    case '-':
        result = num1-num2;
        break;
    case '*':
        result = num1*num2;
        break;
    case "/":
        result = num1/num2;
        break; 
    default:
        result = 'Invalid operator' ;                
}

console.log("Result: ", result);