const Author = require('../models/models');

module.exports = {
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getAll: (req, res) => {
        Test.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        Test.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        Test.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        Test.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};
