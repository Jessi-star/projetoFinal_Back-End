const express = require("express");
const router = express.Router();
const pagamentoController = require("../controllers/pagamento-controller");
const middlewarePagamentos = require("../middlewares/pagamento-middlewares");

router.get("/pagamentos", pagamentoController.getAllPagamentos);
router.get(
    "/pagamentos/:id",
    middlewarePagamentos.middlewareGetPagamentoById,
    pagamentoController.getPagamentosById,
);

router.post(
    "/pagamentos",
    middlewarePagamentos.middlewareInsertPagamento,
    pagamentoController.insertPagamento,
);

router.put(
    "/pagamentos/:id",
    middlewarePagamentos.middlewareUpdatePagamento,
    pagamentoController.updatePagamento,
);

router.delete(
    "/pagamentos/:id",
    middlewarePagamentos.middlewareDeletePagamento,
    pagamentoController.deletePagamento,
);

module.exports = router;