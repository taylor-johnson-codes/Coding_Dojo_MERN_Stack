const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/team_manager_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to DB has been established!"))
    .catch(err => console.log("Error occurred when attempting to connect to DB: ", err));
