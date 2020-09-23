const Player = require('../models/models');

module.exports = {
    create: (req, res) => {
        Player.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getAll: (req, res) => {
        Player.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        Player.findOneAndUpdate({ _id: req.params.id }, {$set: req.body}, { runValidators: true, useFindAndModify: false, new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};