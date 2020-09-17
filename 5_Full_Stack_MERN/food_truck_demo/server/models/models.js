const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    name: {
        type: String, // data types must be capitalized
        required: true,
        minlength: 2, // will return generic error message
        maxlength: [30, "Name must be less than 30 characters."],
        // default: ""
    },

    age: {
        type: Number,
        required: true,
        min: 13,
    },

    email: {
        type: String,
        required: true,
        // custom validation:
        validate: {
            validator: (value) => {
                // code for validating (i.e. run regex check)
                // return bool based on code above (i.e. return result of regex check)
                let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                return re.test(value);
            },
            message: "Invalid email address!",
        },
    },
}, { timestamps: true })

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
