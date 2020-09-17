const controller = require("../controllers/controller");

module.exports = (app) => {
    // C
    app.post("/api/test", controller.create);

    // R
    app.get("/api/test", controller.getAll);
    app.get("/api/test/:id", controller.getOne);


    // U
    app.patch("/api/test/:id", controller.updateOne);
    // OR
    // app.put("/api/test/:id", controller.updateOne);

    // D
    app.delete("/api/test/:id", controller.deleteOne);
