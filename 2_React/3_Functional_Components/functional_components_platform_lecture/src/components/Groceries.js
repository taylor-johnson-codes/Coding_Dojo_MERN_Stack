import React from 'react';

const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>{
            groceryList.map((item, i) =>
                <li key={i}>{item}</li>  // used index i as the key to silence a React warning
            )
        }</ul>
    );
}

export default Groceries;

/*

While some frameworks supply framework-specific ways to loop through arrays, React instead leans on a built-in array method: map.

Looping without map:
const nums = [1, 2, 3, 4, 5];
const newNums = [];
for(let i = 0; i < nums.length; i++) {
    newNums.push( nums[i] * 2 );
}
console.log( newNums ); // logs [2, 4, 6, 8, 10]


Looping with map:
const nums = [1, 2, 3, 4, 5];
function double(num) {
    return num * 2;
}
const newNums = nums.map( double );
console.log( newNums ); // logs [2, 4, 6, 8, 10]

We created a pure and transparent function that will always return double the supplied argument, given that the 
argument is a number. Next, we create a new constant variable called newNums that is assigned to the result of 
invoking the map method on nums with an argument of double. Notice that we were able to pass in the entire definition 
of double when we called map. Functions are "first-class citizens" in JavaScript: that is, they can be passed around 
in the same way as other values. In general, you can use the map method whenever you want to transform each element of 
an array according to a function. An important thing to note is that the result of calling the map method is a new array; 
it doesn't change the original.


The function we supply can optionally take in two additional arguments in addition to the current value: 
the current index, and a reference to the array itself. Thus, the entire signature of a map callback looks like 
the following:

function(currentVal, currentIndex, thisArray) {
    // transform the val here
}

*/