// Rewrite the code the way it would be seen by the interpreter and predict the output. 

// Original code: 
console.log(hello);
var hello = 'world';

// My prediction of the interpreter's order of operations:
var hello;
console.log(hello);  // will result in undefined
hello = 'world';

// Result of running the original code: undefined


// Original code: 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// My prediction of the interpreter's order of operations:
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();  // will log 'magnet'

// Result of running the original code: logged 'magnet'


// Original code: 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// My prediction of the interpreter's order of operations:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);  // will log 'super cool'

// Result of running the original code: logged 'super cool'


// Original code: 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// My prediction of the interpreter's order of operations:
var food = 'chicken';
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);  // will log 'chicken'
eat();  // will log 'half-chicken'

// Result of running the original code: logged 'chicken' and 'half-chicken'


// Original code: 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// My prediction of the interpreter's order of operations:
var mean;
mean = function() {  // error will occur here and nothing else will run
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);

// Result of running the original code: error says "mean is not a function"


// Original code: 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// My prediction of the interpreter's order of operations:
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);  // logs undefined
genre = "disco";
rewind();  // logs 'rock' logs 'r&b'
console.log(genre);  // logs 'disco'

// Result of running the original code: logs undefined rock r&b disco


// Original code: 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// My prediction of the interpreter's order of operations:
dojo = "san jose";  // I think var is there by default
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);  // logs san jose
learn();  // logs seattle logs burbank
console.log(dojo);  // logs san jose

// Result of running the original code: logs san jose seattle burbank san jose


// Original code (BONUS): 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// My prediction of the interpreter's order of operations:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));  // will get an error because hiring isn't an attribute that can be called
console.log(makeDojo("Berkeley", 0));  // will get an error because const {} can't be changed to a string

// Result of running the original code:

/*
output of 
console.log(makeDojo("Chicago", 65)); 
is
{ name: 'Chicago', students: 65, hiring: true }  I guess when setting an attribute that doesn't exist to a value creates that attribute
*/

/*
output of 
console.log(makeDojo("Berkeley", 0));
is
dojo = "closed for now";
            ^
TypeError: Assignment to constant variable.
*/