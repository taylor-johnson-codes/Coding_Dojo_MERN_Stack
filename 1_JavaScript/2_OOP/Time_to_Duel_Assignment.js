// parent class
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

// child class
class Unit extends Card {
    constructor(name, cost, res, power) {
        super(name, cost);
        this.res = res;
        this.power = power;
    }

    attack(target) {
        if(target instanceof Unit) {
            target.res -= this.power;
        } 
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

// child class
class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target) {
        if(target instanceof Unit) {
            if (this.stat == "res") {
                target.res += this.mag;
            }
            if (this.stat == "power") {
                target.power += this.mag;
            }
        } 
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);

const Rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);

const PairProgram = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

console.log("Player 1 summons Red Belt Ninja");
console.log("Player 1 plays Hard Algorithm on Red Belt Ninja");
HardAlgo.play(RedBeltNinja);

console.log("Player 2 summons Black Belt Ninja");
console.log("Player 2 plays Unhandled Promise Rejection on Red Belt Ninja");
Rejection.play(RedBeltNinja);

console.log("Player 1 plays Pair Programming on Red Belt Ninja");
PairProgram.play(RedBeltNinja);

console.log("Player 1 has Red Belt Ninja attack Black Belt Ninja");
RedBeltNinja.attack(BlackBeltNinja);