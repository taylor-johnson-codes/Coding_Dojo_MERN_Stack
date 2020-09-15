const faker = require('faker');

// classes are mimicking what we'd have in a database

class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

/*
class Team {
    constructor(){
        this.city = faker.address.city();
        this.name = faker.company.bsNoun();
        this.sport = faker.commerce.productName();
        this.players = [];

        for(let i=0; i<5; i++){
            this.players.push(new Player());
        }
    }
}

class Player {
    constructor(){
        this.name = faker.name.firstName();
    }
}
*/

// let weird = new Team();
// console.log(weird);

module.exports = {
    newUser: (req, res) => {
        res.json(new User());
    },

    newCompany: (req, res) => {
        res.json(new Company());
    },

    newUserAndCompany: (req, res) => {
        res.json({ user: new User(), company: new Company() });
    },

    /*
    getAll: (req,res) => {
        let response = [];
        for(let i = 0; i < 5; i++) {
            response.push(new Team());
        }
        res.json(response);
    }
    */
};