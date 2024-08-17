const express = require("express");
const router = express.Router();
const caractereClientesController = require("../controllers/caractereClientesController");
const caracteristicaCarroMiddleware = require("../middlewares/caracteristicaCarroMiddleware");

router.get("/caracteristica", caracteristicaCarroMiddleware.middlewareGetAllClientes,
caractereClientesController.getAllclientes);

router.post("/caracteristica", caracteristicaCarroMiddleware.middlewareInsertClientes,
caractereClientesController.insertClientes);

router.put("/caracteristica", caracteristicaCarroMiddleware.middlewareUpdateClientes,
caractereClientesController.updateClientes);

router.delete("/caracteristica", caracteristicaCarroMiddleware.middlewareDeleteClientes,
caractereClientesController.updateClientes);

module.exports = router;
