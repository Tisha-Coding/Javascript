let readlinesync = require('readline-sync');

let password = readlinesync.question("Enter the password: ");

let confirmpassword = readlinesync.question("Enter the confirm password: ");

if(password===confirmpassword)
{
    console.log("Password Matched. Password Validation Successful");
}
else
{
    console.log("Password Validation Unsuccessful.");
}