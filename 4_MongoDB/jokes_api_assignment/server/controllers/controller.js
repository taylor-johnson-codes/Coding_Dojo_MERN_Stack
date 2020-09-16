const Joke = require("../models/models");

module.exports = {
    allJokes: (req, res) => {
        Joke.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    singleJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    randomJoke: (req, res) => {
        Joke.aggregate({ $sample: {size: 1} })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, useFindAndModify: false })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    deleteJoke: (req, res) => {
        Joke.findOneAndDelete({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },
};