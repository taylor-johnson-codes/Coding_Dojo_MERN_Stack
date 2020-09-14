const controller = require("../controllers/controller");

module.exports = app => {
    app.get("/api/all", controller.getAll);
}