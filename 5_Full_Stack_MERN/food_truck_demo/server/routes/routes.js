const controller = require("../controllers/controller");

module.exports = (app) => {
    app.post("/api/test", controller.create);
    app.get("/api/test", controller.getAll);
    app.get("/api/test/:id", controller.getOne);
    app.patch("/api/test/:id", controller.updateOne);
    app.delete("/api/test/:id", controller.deleteOne);
};
