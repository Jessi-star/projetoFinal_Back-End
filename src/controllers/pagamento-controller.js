const pagamentoModel = require("../models/pagamentoModel");



async function getAllPagamentos(req, res) {
    const pagamentos = await pagamentoModel.getAllPagamentoModel();

    return res.send(pagamentos);
}

async function getPagamentosById(req, res){
    const {id} = req.params;
    const pagamentos = await pagamentoModel.getAllPagamentoModel(id);

    return res.send(pagamentos);

}

async function insertPagamento(req, res){
    const{
        veiculo_id,
        forma_pagamento,
        status_pagamento
    } = req.body

    await pagamentoModel.insertPagamentoModel(
        veiculo_id,
        forma_pagamento,
        status_pagamento
    );

   return res.status(201).send("Pagamento feito com sucesso")
    
}

async function updatePagamento(req, res){
    const {id} = req.params;
    const {forma_pagamento} = req.body;

    await pagamentoModel.updatePagamentoModel(id, forma_pagamento);

    return res.send("Pagamentos atualizados com sucesso")
}

async function deletePagamento(req, res){
    const {id} = req.params;

    await pagamentoModel.deletePagamentoModel(id);
    
    return res.send("Pagamento deletado com sucesso");
}

module.exports = {
    getAllPagamentos,
    getPagamentosById,
    insertPagamento,
    updatePagamento,
    deletePagamento
}