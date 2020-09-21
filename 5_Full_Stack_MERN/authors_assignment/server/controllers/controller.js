const Author = require('../models/models');

module.exports = {
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getAll: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false, new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        // Author.findOneAndDelete({ _id: req.params.id })
        Author.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};
