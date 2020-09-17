const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: [2, "Must be more than 1 character."],
        maxlength: [30, "Must be less than 30 characters."],
    },

    review: {
        type: String,
        required: true,
        minlength: [5, "Must be more than 4 characters."],
    },

    rating: {
        type: Number,
        required: true,
        min: [1, "Must be at least 1 star."],
        max: [5, "Max is 5 stars."],
    }
}, { timestamps: true })

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;