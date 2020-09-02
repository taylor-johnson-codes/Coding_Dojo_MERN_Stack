// For the following five blocks of code, predict the output. 
// If a line of code will throw an error, state the error.

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)  // logs Tesla
console.log(otherRandomCar)  // logs Mercedes

// Actual: got it!


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);  // error: name doesn't exist and breaks
console.log(otherName);  // { otherName: 'Elon' }

// Actual: 
// ReferenceError: name is not defined
// Elon


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);  // '12345'
console.log(hashedPassword);  // undefined

// Actual: got it!


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first == second);  // false
console.log(first == third);  // true

// Actual: got it!


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);  // { key: 'value', secondKey: [1, 5, 1, 8, 3, 3] }
console.log(secondKey);  // { key: 'value', secondKey: [1, 5, 1, 8, 3, 3] }
console.log(secondKey[0]);  // { key: 'value' }
console.log(willThisWork);  // undefined

// Actual: 
// value
// [ 1, 5, 1, 8, 3, 3 ]
// 1
// 5