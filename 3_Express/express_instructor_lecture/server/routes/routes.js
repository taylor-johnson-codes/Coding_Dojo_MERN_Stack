const controller = require("../controllers/controller");

module.exports = app => {
    app.get("/api", controller.generic);
			app.post("/api", controller.newData);
}