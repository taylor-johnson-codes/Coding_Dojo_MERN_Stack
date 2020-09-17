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

    getOne: (req, res) => {
        Test.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
            /*
            .catch(err => {
                if(err.kind == "ObjectId"){
                    res.json({ message: "An object with that ID doesn't exist in the DB." });
                }
                else{
                    res.json(err);
                }
            })
            */
    },

    updateOne: (req, res) => {
        Test.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        Test.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}