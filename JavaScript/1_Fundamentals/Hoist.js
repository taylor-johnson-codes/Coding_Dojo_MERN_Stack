// Rewrite the code the way it would be seen by the interpreter and predict the output. 

// Original code: 

console.log(hello);                                   
var hello = 'world';                                 

// My prediction of the interpreter's order of operations:


// Result of running the original code:




// Original code: 

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


// My prediction of the interpreter's order of operations:



// Result of running the original code:




// Original code: 

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// My prediction of the interpreter's order of operations:



// Result of running the original code:




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



// Result of running the original code:




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



// Result of running the original code:




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



// Result of running the original code:




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



// Result of running the original code:




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



// Result of running the original code:




