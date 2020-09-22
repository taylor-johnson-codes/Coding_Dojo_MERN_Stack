const Author = require('../models/models');

module.exports = {
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    // create = (req, res) => {
    //     const { name } = req.body;
    //     Person.create({ name })
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    // },

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
        // Author.updateOne({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false, new: true })
        Author.findOneAndUpdate({ _id: req.params.id }, {$set: req.body}, { runValidators: true, useFindAndModify: false, new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        // Author.findOneAndDelete({ _id: req.params.id })
        // Author.remove({ _id: req.params.id })
        Author.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};
