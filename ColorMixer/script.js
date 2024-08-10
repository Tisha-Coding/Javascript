let readlinesync = require('readline-sync');

let string1 = readlinesync.question("Enter the first color: ");

let string2 = readlinesync.question("Enter the second color: ");

switch(string1+'-'+string2)
{
    case 'red-blue':
    case 'blue-red':
        console.log('purple');
        break;
    case 'red-yellow':
    case 'yellow-red':    
        console.log('orange');
        break;
    case 'blue-yellow':
    case 'yellow-blue':
        console.log('green');
        break;
    default:
        console.log('Invalid color combination');
}