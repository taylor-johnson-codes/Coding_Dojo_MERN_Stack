const controller = require("../controllers/controller");

module.exports = (app) => {
    app.get("/", controller.getAll);
    app.post("/new", controller.create);
    app.get("/edit/:id", controller.getOne);
    app.patch("/edit/:id", controller.updateOne);
    app.delete("/edit/:id", controller.deleteOne);
};
