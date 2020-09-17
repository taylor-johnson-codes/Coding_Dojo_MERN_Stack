const mongoose = require("mongoose");
const {ReviewSchema} = require('./review.models');

const TruckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [1, "Must be at least 1 character."],
        maxlength: [20, "Must be less than 20 characters."],
    },

    style: {
        type: String,
        required: true,
        minlength: [1, "Must be at least 1 character."],
        maxlength: [20, "Must be less than 20 characters."],
    },

    description: {
        type: String,
        required: true,
        minlength: [5, "Must be at least 5 characters."],
        maxlength: [40, "Must be less than 40 characters."],
    },

    reviews: [ReviewSchema]

}, { timestamps: true })

const Truck = mongoose.model("Truck", TruckSchema);

module.exports = {Truck}