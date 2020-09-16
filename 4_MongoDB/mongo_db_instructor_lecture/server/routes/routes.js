const controller = require("../controllers/controller");

module.exports = app => {
    // app.get("/api", controller.generic);
    // app.post("/api", controller.newData);
    app.post('/api', controller.create);
    app.get('/api', controller.findAll())  // gets all data from DB
}