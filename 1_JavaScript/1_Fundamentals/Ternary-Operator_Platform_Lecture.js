/*
The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark (?), 
then an expression to execute if the condition is truthy followed by a colon (:), 
and finally the expression to execute if the condition is falsy. 
This operator is frequently used as a shortcut for the if statement.
*/

// Essentially, a ternary operator is a short version of an if statement.

// Basic if statement:
let canAfford = (itemPrice, accountBalance) => {
    if(itemPrice > accountBalance){
        return `Can't afford! You're $${itemPrice - accountBalance} short.`;
    }
    else{
        return "Can afford!";
    }
};

// Ternary statement:
let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
    ? `Can't afford! You're $${itemPrice - accountBalance} short.`  // if true, return this
    : "Can afford!";  // else, return this
}


// Take care when nesting ternary statements, as they can tend to become unwieldy and unreadable. 
// For instance, consider the following:
const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false