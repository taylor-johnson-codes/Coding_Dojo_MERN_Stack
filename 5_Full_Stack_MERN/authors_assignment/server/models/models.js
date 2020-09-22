const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Must be at least 3 characters long."],
        required: [true, "Author's name is required."],
    }
}, { timestamps: true })

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;

// module.exports.Author = mongoose.model('Author', AuthorSchema);