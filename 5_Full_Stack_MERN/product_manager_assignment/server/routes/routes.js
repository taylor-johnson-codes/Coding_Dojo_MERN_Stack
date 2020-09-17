const controller = require("../controllers/controller");

module.exports = (app) => {
    app.post("/api/", controller.create);
    app.get("/api/", controller.getAll);
    app.get("/api/:id", controller.getOne);
    app.patch("/api/:id", controller.updateOne);
    app.delete("/api/:id", controller.deleteOne);
};