const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// BEFORE ES6
var email = person.email;
var firstAnimal = animals[0];

// AFTER ES6
const { email } = person;
const [firstAnimal] = animals;
console.log(email);  // bob@marley.com
console.log(firstAnimal);  // horse


// BEFORE ES6
var email = person.email;
var password = person.password;
var firstAnimal = animals[0];
var secondAnimal = animals[1];
var thirdAnimal = animals[2];

// AFTER ES6
const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;


/*
NAME CONFLICTS

const password = '12345';
const { password } = person;
    error: SyntaxError: Identifier 'password' has already been declared. 


const { hashedPassword } = person;
    When destructuring from objects the property names must be matched exactly, so in this example, 
    because hashedPassword does not exist on our person object, it will be undefined.

THIS WORKS:
const password = '12345';
const { password: hashedPassword } = person;
    Specifying the property name, password, will access the value of that property on our object. 
    The colon : after the property name followed by your new variable redirects the value of password 
    to be held in hashedPassword, thereby eliminating the aforementioned identifier conflict.
*/


/*-----------------------------------------------------------------------------------*/

// Nested Destructuring example

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
        },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
    };

// If we want the individual addresses as variables we could certainly destructure addresses, then destructure each address.
const { addresses: [whiteHouse, sherlock] } = person;

// What if we want to skip the first address and only want the city of the second, but using an alternate variable name?
const { addresses: [ , { city: london }] } = person;
console.log(london);  // London

// Leaving an 'empty' first position (just a comma) allows skipping that index and destructuring from the second address. 
// This can be done to any depth, just be sure your content actually exists.
const { addresses: [ , , , , { city: london }] } = person;
// The above example will produce an error. We skipped so many addresses that the final position doesn't have an address 
// object. Attempting to destructure from undefined or null throws: TypeError: Cannot destructure property 'city' of 
// 'undefined' or 'null'.