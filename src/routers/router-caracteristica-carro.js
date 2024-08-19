const express = require("express");
const router = express.Router();
const caractereClientesController = require("../controllers/caractereClientesController");
const caracteristicaCarroMiddleware = require("../middlewares/caracteristicaCarroMiddleware");

router.get("/caracteristica", caracteristicaCarroMiddleware.middlewareGetAllClientes,
caractereClientesController.getAllclientes);

router.post("/caracteristica", caracteristicaCarroMiddleware.middlewareInsertClientes,
caractereClientesController.insertCaractereClientes);

router.put("/caracteristica", caracteristicaCarroMiddleware.middlewareUpdateClientes,
caractereClientesController.updateCaractereClientes);

router.delete("/caracteristica/:id", caracteristicaCarroMiddleware.middlewareDeleteClientes,
caractereClientesController.deleteCaractereClientes); 

module.exports = router;
