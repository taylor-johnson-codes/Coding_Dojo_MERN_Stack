// parent Vehicle class
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }

    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }

    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}

// child M5 class
class M5 extends Vehicle {  // extends is the keyword for inheriting
    constructor(color) {
        super("BMW", "M5", color);  // super allows us to call the constructor of the parent class
    }

    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}

const m5 = new M5("Blue");
m5.childFunction();


/* ----------------------------------------------------------------------------- */

// If you "return this;" at the end of each method, you can chain method calls
// i.e. m5.childFunction().drive().drive().drive().childFunction();