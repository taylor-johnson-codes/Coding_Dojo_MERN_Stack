// parent class
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 20;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Your Ninja name is ${ this.name }.`);
    }

    showStats(){
        console.log(`Ninja: ${ this.name }`);
        console.log(`Strength: ${ this.strength }`);
        console.log(`Health: ${ this.health }`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`${ this.name } drank sake and gained 10 health points!`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();