const Joke = require("../models/models");
// const { Test, Model2, Model3 } = require('../models/models')

module.exports = {
    allJokes: (req, res) => {
        Joke.
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    singleJoke: (req, res) => {
        Joke.
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    randomJoke: (req, res) => {
        Joke.
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    updateJoke: (req, res) => {
        Joke.
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

    deleteJoke: (req, res) => {
        Joke.
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },
};