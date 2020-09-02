// ARROW FUNCTIONS
// An anonymous function is simply a function without a name. ES6 introduces a new shortened syntax for 
// writing anonymous functions.  Arrow function aka fat arrow.

// For simple methods we can refine this example further. Single parameters don't need parenthesis and 
// with the function body being a single statement we can remove the curly braces.
const sayHello = name => console.log(`Hello ${name}`);

// More complex functions will need a more complete body ({}), and multiple parameters will require parenthesis. 
// Another benefit of utilizing arrow functions for simple expressions is implicit returns.
const square = n => n * n;
// With arrow functions the result of our expressions, n * n, is implicitly returned to the caller. 

// There is one piece of syntax we need in order to return an object:
// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
     * The example below wouldn't work because the 
     * brackets are interpreted as opening the body of the 
     * function rather than brackets to create an object literal 
     */
const returnObj = () => { firstName: 'John', lastName: 'Wick' }

// surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });


// Arrow functions also inherit context from the parent scope:

class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
}

// We'll start refactoring for a more functional approach using forEach, but continue using traditional anonymous functions.

class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(function(suit) {
            faces.forEach(function(face) {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
}

// Assume we have a createCard method in our class. Creating a new Deck will now result in a 
// TypeError: TypeError: Cannot read property 'createCard' of undefined, because this in our anonymous 
// functions doesn't have the same context as our loops.
// We can fix this issue with arrow functions like so:

class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
    }
}

// Arrow functions don't create their own context, they look to their enclosing scope for that information. 
// Therefore, this should now refer to the Deck instance, which has a createCard method.


/* ----------------------------------------------------------------------*/

// Instructor lecture version:

class Card {
    constructor(suit, face){
        this.suit = suit;
        this.face = face;
    }
}

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.deck = [];

        // Version 1:
        // for (let suit of suits) {
        //     for (let face of faces) {
        //         this.deck.push(this.createCard(suit, face));
        //     }
        // }

        // Version 1.5:
        // suits.forEach(function(suit)){
        //     faces.forEach(function(face)){
        //         this.deck.push(this.createCard(suit,face));  // doesn't work because "this" is within scope of forEach loop, not the instance of the class
        //     }
        // }

        // Version 2 (ARROW FUNCTIONS don't lose scope/can reach out to the parent scope):
        suits.forEach(suit => {
            faces.forEach(face => {
                this.deck.push(this.createCard(suit,face));
            })
        })
    }

    createCard(suit, face){
        return new Card(suit, face);
    }
}
let myDeck = new Deck();
console.log(myDeck);