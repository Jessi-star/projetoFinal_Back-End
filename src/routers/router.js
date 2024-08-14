const express = require("express");
const router = express.Router();
const carroController = require("../controllers/carro-controller");
const middlewareCarro = require("../middlewares/carro-middlewares");

router.get("/carros", carroController.getAllCarros);
router.get(
    "/carros/:id",
    middlewareCarro.middlewareGetCarroById,
    carroController.getCarroById,
);

router.post(
    "/carros",
    middlewareCarro.middlewareInsertCarro,
    carroController.insertCarro,
);

router.put(
    "/carro/:id",
    middlewareCarro.middlewareUpdateCarro,
    carroController.updatePreço,
);

router.delete(
    "/carro/:id",
    middlewareCarro.middlewareDeleteCarro,
    carroController.deleteCarro,
);

module.exports = router;
