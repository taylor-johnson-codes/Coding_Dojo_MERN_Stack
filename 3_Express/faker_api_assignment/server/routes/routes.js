const controller = require("../controllers/controller");

module.exports = app => {
    app.get("/api/users/new", controller.newUser);
    app.get("/api/companies/new", controller.newCompany);
    app.get("/api/user/company", controller.newUserAndCompany);
}