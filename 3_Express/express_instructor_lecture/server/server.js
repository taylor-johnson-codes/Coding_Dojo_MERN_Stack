const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors);

require("./routes/routes")(app);

app.listen(8000, () => console.log("Now listening on port 8000"));

/*
These are for POST requests:
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

They are Express middleware functions, responsible for providing and parsing the request.body data.
*/


/*
server subfolders:
controllers - will hold all logic for each model (i.e creating, updating, etc...)
models - will hold all the schemas
routes - will handle all of our routes for each model
server.js - will handle all the server logic with express
*/


/*
import and export JS code/files to other JS code/files:

require("./filePathGoesHere") - used to import from different files
- The require method automatically looks for JavaScript files, so we don't need to include the .js file extension
- "./" (dot-slash) is the file path for the current directory (by default, the require() method looks for the modules located in a folder called node_modules)

module.exports = WhateverYouNeedToExportGoesHere - used to export whatever content you need to export from that file
*/