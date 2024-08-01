let readlinesync = require('readline-sync');

let names = readlinesync.question("Enter Your Name: ");

let count = 0;

for(let i=0; i<names.length; i++)
{
    let name = names[i];
    if(name === 'i' || name === 'e' || name === 'o' || name ===  'a' || name === 'u' || name === 'I' || name === 'E' || name === 'O' || name ===  'A' || name === 'U' )
    {
        count = count + 1;
    }
}

console.log("The number of vowels in the your name is: ", count);