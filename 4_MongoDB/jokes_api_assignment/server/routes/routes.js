const controller = require("../controllers/controller");

module.exports = (app) => {
    app.get("/api/jokes", controller.allJokes());
    app.get("/api/jokes/:_id", controller.singleJoke());
    app.get("/api/jokes/random", controller.randomJoke());
    app.post("/api/jokes/new", controller.createJoke());
    app.put("/api/jokes/update/:_id", controller.updateJoke());
    app.delete("/api/jokes/delete/:_id", controller.deleteJoke());
}