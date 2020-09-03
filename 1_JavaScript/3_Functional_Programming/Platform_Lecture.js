// JavaScript is multi-paradigm and we can write it procedurally, functionally, or object oriented-ly or any combination of the above.

/*
When using functional programming, our functions should:
- be transparent: every time a function is called with the same inputs it should return the same results 
- be pure: the function should remain "pure" and the values of the parameter passed in are not allowed to be changed... we will be making copies of arrays or objects passed in rather than working "in-place"
- avoid side effects: the function shouldn't make API calls, write to file-systems or databases, or print to console
- never be void: our functions have to return a value... if they don't then what they did must have violated one of our previous rules around side-effects, or mutating an input

If this all sounds incredibly limiting, that's because it is. However following these patterns will make bugs easy to spot and can result in a performance boost from using immutable data structures.

Note: it won't be possible for every function we write in our projects to be "transparent and without side-effects" as getting information from an API or Database, generating random numbers, or getting date times will violate some rules for our functions.
*/



//////////////// CALLBACK FUNCTION ////////////////

setTimeout( function() { 
    console.log("start") 
}, 3000 );
console.log("end");

/*
There are 2 parameters this expects: a function and a number.
Let's talk about the number first-- it represents the delay in milliseconds, in the above example this is 3000, and the other is a function-- whatever code we want to run after the 3000 millisecond delay.
This function parameter is called by setTimeout() like a function. It represents something that we conventionally refer to as a "callback function", a function that is passed into another function to be called by that function.
*/


// In JavaScript functions are treated like just any other variable type.
console.log( typeof( "hello" ) );  // 'string'
console.log( typeof( function() {} ) );  // 'function'


// We can declare a variable and set it equal to a function and then call that function using the variable name.
var exampleFunction = function(message){
    console.log( message );
};
exampleFunction( "Hello from exampleFunction" );


// As we saw in the example above, we can also pass a function as as a parameter into some parent function. In this case let's call this parameter callback and pass it a message.
function parentFunction( callback ) {
    callback( "information from the parent function" );
}  


// We can then call the parent function like this:
parentFunction( exampleFunction );


// These sort of functions are often used with anonymous functions (functions without a name) and we could rewrite our example to be called like this:
parentFunction( function(message) {
    console.log( message );
});


/*
Callback functions will see a lot of use when:
- Some code needs to run after an event (user clicks a button, user visits "localhost:5000/home")
- Making API calls (it takes some time for the data to come back from another server or our own back-end server)
- Querying a database (it can take a while if queries are writing many rows or are joining many tables)
*/



//////////////// Object.freeze() ////////////////

const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 

// If we want to prevent even those sorts of changes, we can use Object.freeze() to give our array or object Immutability.
const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

// Let's say we have an immutable list of groceries:
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

// If we decide that we need to add "thyme" to the list we can use spread to make a copy of the list and add "thyme" to it.
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
// the ...groceryList at the beginning of the array is us making a copy of the objects already in groceryList, we then follow this with a comma , as if we are simply declaring an array with a new "thyme" object.


// We can also use .concat() for this one. Concat is a method that essentially takes two arrays, glues them together and gives us back the new array.
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );


// If we find that we already have "thyme" and we want to set the "haveIngredient" to true we can write something like:
const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
/*
Slice is a function that can take 2 parameters and return an array of the values that have indexes between those two parameters. We can follow that up with a comma and a new object. Inside the new object we can use the spread operator to copy over the attributes from the Ingredient at index 5, and overwrite its haveIngredient key to be true.
*/


// If celery is "ingredient non grata", we could remove it also using slice:
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

// Once again we can use slice, the first slice giving us the ingredients at indexes 0 and 1, the second slice giving us all the ingredients with indexes from 3 to the end.



//////////////// SORTING ////////////////

// The sort function is really useful, however when we run it it manipulates the array it was run upon instead of giving us a new one.
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
items.sort();  // this will throw an error 


// We can however get around this with some clever use of the spread ... operator.
const sortedItems = [...items].sort();
// This will return the Grocery List items in a sorted manor.


// Sort is really handy, however there is a bit of a trap... if what we're sorting are numbers it will not return the results we're expecting
const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();  // this will return [10, 12, 22, 3, 5, 8]

// Sort works by converting the values into strings before sorting, check out the fantastic w3schools for a nifty workaround.


// Sorting Objects: Sometimes what we want to sort based off of is an attribute inside of an object, we can still do that using sort by using a callback function. Referring back to our groceryList example from above, we could sort the ingredient objects based on the ingredient name using the following.
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );
// Notice how this time we have to write a callback function inside of sort letting it know what attribute to use when sorting.




//////////////// .map() ////////////////

// Map will make a copy of an array and apply our own twist to it... using a callback function that takes in each element of the array returning what we want to do to each element.
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
// This will take a list of items and return an array of strings resembling html "list items"... 
// ["<li>pearl onions</li>", "<li>cremini mushrooms</li>", "<li>thyme</li>"]


// We can also use map with an array of numbers:
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
// This will create list of cubed numbers. [1, 8, 27, 64, 125]




//////////////// .filter() ////////////////

const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 );
// This will create a list of only the even values... [2, 4]; if we wanted the odds we could get them by changing the === to !==


// If we want only the groceries that have the letter "o" in them we could write:
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );


// We can even chain filter and map together if we want to.
const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
// This will filter out the even numbers and cube the ones that are left over. [1, 27, 125]




//////////////// CURRYING  ////////////////

// Currying is the idea that you only run part of a function, rather than the whole thing.

// Example: Uncurried
function ninjaBelt(ninja, beltColor){
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
}
ninjaBelt('Eileen', 'black');


// Example: Curried
function ninjaBelt(ninja){
    return function belt(beltColor){
        console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
    }
}
ninjaBelt('Eileen')('black');




//////////////// CLOSURES  ////////////////

function outer() {
    let count = 0;  // this is a count variable that is scoped to the function

    function inner() {  // there is an inner function that increments count and then console logs it
        count++;
        console.log(count);
    }
    return inner;  // we're returning the inner function
}

const counter = outer();   // counter is the function that we returned from calling the outer function
counter();                 // this will console.log "1"
counter();                 // this will console.log "2"
counter();                 // this will console.log "3"
counter();                 // this will console.log "4"

// so that means that the count variable still exists! 
// and it is being changed even though we aren't inside of the Outer function!
// can we access count out here?
console.log(count); // doesn't work!

/*
What actually happened is that the count variable was instantiated when the outer function was called. Then since we returned the inner function, it got stored in "counter". Now every time we called the counter function it had access to the "enclosed" variables from the outer function.

Closures are tough to wrap your head around at first. Just remember that the inner function in a closure is the one that is returned and accessed outside of the function definition.
*/