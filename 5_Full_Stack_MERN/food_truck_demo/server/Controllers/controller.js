const Truck = require('../models/models');

module.exports = {
    createTruck: (req, res) => {
        Truck.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    allTrucks: (req, res) => {
        Truck.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    oneTruck: (req, res) => {
        Truck.findOne({ _id: req.params.id })
            // .then(data => res.json(data))
            .then(data => {
                if(data == null){
                    res.status(500).json({ error: "Food truck doesn't exist." })
                } else {
                    res.json(data)
                }
            })
            .catch(err => res.json(err));
    },

    updateTruck: (req, res) => {
        Truck.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, useFindAndModify: false })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addReview: (req, res) => {
        Truck.findOne({ _id: req.params.id, 'reviews.name': req.body.name })
            .then(data => {
                if(data == null){
                    Truck.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { reviews: req.body } }, { new: true, runValidators: true, useFindAndModify: false })
                        .then(data => res.json(data))
                } else{
                    res.status(500).json({ error: 'Name already used for another review on this truck'});
                }
            })
            .catch(err => res.json(err));
    },

    deleteTruck: (req, res) => {
        Truck.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
};