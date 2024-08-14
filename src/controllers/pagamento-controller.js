const listaPagamentos = require("../mocks/listaPagamentos");
const pagamentosModel = require("../models/pagamentosModel");



async function getAllPagamentos(req, res) {
    const pagamentos = await pagamentosModel.getAllPagamentosModel();

    return res.send(pagamentos);
}

async function getPagamentosById(req, res){
    const {id} = req.params;
    const pagamentos = await pagamentosModel.getAllPagamentosModel(id);

    return res.send(pagamentos);

}

async function insertPagamento(req, res){
    const{
        marca,
        modelo,
        ano,
        preço,
        imagem,
        status
    } = req.body

    await pagamentosModel.insertPagamentoModel(
        marca,
        modelo,
        ano,
        preço,
        imagem,
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

    await pagamentosModel.deletePagamentoModel(id);
    
    return res.send("Pagamento deletado com sucesso");
}

module.exports = {
    getAllPagamentos,
    getPagamentosById,
    insertPagamento,
    updatePagamento,
    deletePagamento
}
