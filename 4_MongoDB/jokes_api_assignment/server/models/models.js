const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
        minlength: [10, "Must be at least 30 characters long."],
    },

    punchline: {
        type: String,
        required: true,
        minlength: [3, "Must be at least 3 characters long."],
    }
}, { timestamps: true })

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;