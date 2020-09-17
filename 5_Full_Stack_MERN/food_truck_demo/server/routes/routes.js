const controller = require("../controllers/controller");

module.exports = (app) => {
    app.post("/api/trucks", controller.createTruck);
    app.get("/api/trucks", controller.allTrucks);
    app.get("/api/trucks/:id", controller.oneTruck);
    app.patch("/api/trucks/:id", controller.updateTruck);
    app.patch("/api/trucks/review/:id", controller.addReview);
    app.delete("/api/trucks/:id", controller.deleteOne);
};
