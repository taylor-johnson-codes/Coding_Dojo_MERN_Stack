const Test = require('../models/models');

module.exports = {
    create: (req, res) => {
        Test.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getAll: (req, res) => {
        Test.find()
        /*
        .then(data => {
            // if there's no data in the DB
            if (data.length > 0) {
                res.json(data)
            }
            else {
                res.status(500).json({ message: "No data in the database" });
            }
        })
        */
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },


};