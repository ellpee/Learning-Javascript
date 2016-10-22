
function b() {
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World!';

console.log(a);

//Seperation

var a = 30;
console.log(a);

if (a === undefined) {
    console.log('a is undefined!');
}

else {
    console.log('a is defined!');
}

//Seperation

b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

//One way to access primitive types

var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname"

console.log(person);
console.log(person[firstNameProperty]);

//The dot method
console.log(person.firstname)