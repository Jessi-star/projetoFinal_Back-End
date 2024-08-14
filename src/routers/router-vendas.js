const vendasController = require("../controllers/vendas-controller");
const middlewareVendas = require("../middlewares/vendas-middlewares");

router.get("/vendas", vendasController.getAllVendas);
router.get(
  "/vendas/:id",
  middlewareVendas.middlewareGetVendasById,
  vendasController.getVendasById
);
router.post(
  "/vendas",
  middlewareVendas.middlewaresInsertVendas,
  vendasController.insertVendas
);
router.put(
  "/vendas/:id",
  middlewareVendas.middlewareUpdateVendas,
  vendasController.updateVendas
);
router.delete(
  "/vendas/:id",
  middlewareVendas.middlewareDeleteVendas,
  vendasController.deleteVendas
);