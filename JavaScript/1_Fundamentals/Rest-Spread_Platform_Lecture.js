// ES6 provides us with a new operator, ..., that is context dependent. Its purpose is to capture the rest 
// of a data set, or to spread content of an existing structure.

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(firstAnimal);  // horse
console.log(secondAnimal);  // dog
console.log(otherAnimals);  // ['fish', 'cat', 'bird']



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

// Grabbing firstName and lastName from person is easy, along with assigning all other properties to a 'catchall'.
const { firstName, lastName, ...attributes } = person;

// Using spread we can quickly make complete copies of objects or arrays.
const personCopy = { ...person };

// There are some limitations. The copy is shallow, so any complex or nested structures with objects 
// references will still point to the same object. We'll use our person objects to demonstrate.
const personCopy = { ...person };
personCopy === person  // false
personCopy.addresses === person.addresses  // true