const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must be at least 2 characters long."]
    },

    position: {
        type: String,
        minlength: [2, "Position must be at least 2 characters long."]
    },

    gameOne: {
        type: String,
        default: "undecided"
    },

    gameTwo: {
        type: String,
        default: "undecided"
    },

    gameThree: {
        type: String,
        default: "undecided"
    },
}, { timestamps: true })

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
