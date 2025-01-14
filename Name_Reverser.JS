const prompt = require('prompt-sync')();

let inputname = prompt("Please Enter Your Name"); //Expected Reversal eman

console.log("Your Name In Reverse: " + Reversal(inputname));
isPalendrome(inputname);

function Reversal(name)
{
    var newname = "";

    for(var i = name.length - 1; i >= 0; i--)
    {
        newname = newname + name[i];
    }
    return newname;
}

function isPalendrome(name)
{
    var ispalendrome = null;
    var newname = Reversal(name);
    if(newname.toLowerCase() === name.toLowerCase())
    {
        console.log("Hell YEAH! Its a Palindrome");
        ispalendrome = true;
    }
    else
    {
        console.log("AWW fuCk ItS NoT a pAlinDrome");
        ispalendrome = false;
    }
    console.log(newname);
    return ispalendrome;
}