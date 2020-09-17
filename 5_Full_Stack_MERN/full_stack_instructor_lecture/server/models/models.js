const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Must be more than 2 characters."],
        maxlength: [30, "Must be less than 30 characters."],
    },

    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                return re.test(value);
            },
            message: "Invalid email address!",
        },
    },
}, { timestamps: true })

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;