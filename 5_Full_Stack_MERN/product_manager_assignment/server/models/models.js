const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [2, "Must be more than 2 characters."],
        maxlength: [30, "Must be less than 30 characters."]
    },

    price: {
        type: Number,
        required: [true, "A price is required."],
        min: [0, "Minimum price is 0."]
    },

    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [2, "Must be more than 2 characters."],
        maxlength: [50, "Must be less than 50 characters."]
    }
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
