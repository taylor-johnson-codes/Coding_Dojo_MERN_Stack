const Test = require('../models/models');
// const { Test, Model2, Model3 } = require('../models/models')

module.exports = { 
    // generic: (req, res) => {
    //     res.json({ message: "success", data: [1, 2, 3] });
    // }

    create: (req, res) => {
        // if using shell: db.demo_db.insert(...)
        // Test.create({ name: "Taylor", age: 101, email: "taylor@email.com" })
        Test.create(req.body)  // req.body is how we get info submitted thru a form
            .then(data => {
                res.json(data);  // data is the newly created object in DB
            })
            // .catch(err => console.log(err));
            .catch(err => res.json(err));
    },

    findAll: (req, res) => {
        Test.find({})
            .then(data => {
                res.jason(data);
            })
            .catch(err => res.json(err));
    }
}
