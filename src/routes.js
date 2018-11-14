express = require('express');
const routes = express.Router();

const ReitorController = require('./controllers/ReitorController');

routes.get("/reitor", ReitorController.index );
routes.get("/reitor/:id", ReitorController.show);
routes.post("/reitor", ReitorController.store);
routes.put("/reitor/:id", ReitorController.update);
routes.delete("/reitor/:id", ReitorController.destroy);

module.exports = routes;