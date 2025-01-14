const prompt = require('prompt-sync')();

var User = {
firstname: "FirstName",
lastname: "LastName",
setup: function()
{
    this.firstname = prompt("Please Enter First Name")
    this.lastname = prompt("Please Enter Last Name");
},
fullname: function()
{
    return this.firstname + " " + this.lastname;
},
sayhello: function()
{
    console.log("Hi! My name is " + this.fullname());
}

}

User.setup();
console.log(User);
console.log(User.firstname);
console.log(User.lastname);
User.fullname();
User.sayhello();
