// BOILER PLATE example from platform

const express = require("express");  // importing express from node_modules to be used within this file
const app = express();  // initializing our server engine; note the server is not running yet

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

/* alternate:
const getApi = (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
}

app.get("/api", getApi);
*/

// different route request:
app.get("api/page2", (req, res) => {
  res.send("something");
})

// this is running our server:
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// run in terminal with "node server.js"
// alternate: "nodemon server.js" (first installed globally with "npm install -g nodemon")
// nodemon doesn't make you restart server every time you make changes to project, it does that for you