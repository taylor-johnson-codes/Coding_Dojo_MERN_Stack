const controller = require("../controllers/controller");

module.exports = app => {
    app.get("/api", controller.generic);
	app.post("/api", controller.newData);
}

/*
Because we are using Express primarily to build our APIs, it's best practice to start every such route with "/api" 
which will help us avoid route collisions with React's client-side routing.
*/