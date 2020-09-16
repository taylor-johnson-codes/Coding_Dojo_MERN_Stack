const controller = require("../controllers/controller");

module.exports = app => {
    // Create
    app.post('/api', controller.create);

    // Read
    app.get('/api', controller.findAll());
    app.get('/api/:id', controller.find());

    // Update
    app.patch('/api/:id', controller.update());

    // Delete
    app.delete('/api/:id', controller.delete());
}