const controller = require("../controllers/controller");

module.exports = (app) => {
    app.get("/", controller.getAll);
    app.post("/", controller.create);
    app.get("/:id", controller.getOne);
    app.patch("/:id", controller.updateOne);
    app.delete("/:id", controller.deleteOne);
};
