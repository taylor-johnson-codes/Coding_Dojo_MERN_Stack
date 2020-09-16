const Test = require("../models/models");
// const { Test, Model2, Model3 } = require('../models/models')

module.exports = {
    create: (req, res) => {
        Test.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    },

};