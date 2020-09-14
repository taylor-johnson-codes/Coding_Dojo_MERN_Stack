const faker = require('faker');

// class is mimicking what we'd have in a database
class Team {
    constructor(){
        this.city = faker.address.city();
        this.name = faker.company.bsNoun();
        this.sport = faker.commerce.productName();
    }
}

let weird = new Team();
console.log(weird);

module.exports = {
    getAll: (req,res) => {
        let response = [];
        for(let i = 0; i < 5; i++) {
            response.push(new Team());
        }
        res.json(response);
    }
}