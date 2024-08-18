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
        modelo,
        preco,
        status
    } = req.body

    await pagamentoModel.insertPagamentoModel(
        modelo,
        preco,
        status
    );

   return res.status(201).send("Pagamento feito com sucesso")
    
}

async function updatePagamento(req, res){
    const {id} = req.params;
    const {preço} = req.body;

    await pagamentoModel.updatePagamentoModel(id, preço);

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