const controller = require("../controllers/controller");

module.exports = (app) => {
    app.post("/", controller.create);
    app.get("/", controller.getAll);
    app.get("/:id", controller.getOne);
    app.patch("/:id", controller.updateOne);
    app.delete("/:id", controller.deleteOne);
};