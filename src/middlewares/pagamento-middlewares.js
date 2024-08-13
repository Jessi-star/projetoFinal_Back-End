const pagamentos = require("../mocks/listaPagamentos");
const listaPagamentos = require("../mocks/listaPagamentos")
const pagamentoModel = require("../models/pagamentosModel")

async function middlewareGetPagamentoById(res, res, next) {
    const {id} = req.params;
    const pagamento = await pagamentosModel.getPagamentoByIdModel(id);

    if(!pagamento){
        return res.status(404).send("Pagamento não encontrado")
    }

    next();
}

async function middlewareUpdatePagamento(req, res, next) {
    const {id} = req.params;
    const {preço} = req.body;

    if(!id|| !preço){
        return res.status(400).send("Dados incompletos")
    }

    const pagamento = await pagamentosModel.getPagamentoByIdModel(id);

    if(!pagamento){
        return res.status(404).send("Pagamento não encontrado");
    }

    next();

}

async function middlewaresInsertPagamento(req, res, next) {
    const {
        marca,
        modelo,
        ano,
        preço,
        imagem,
        status
    } = req.body;

    if ( !marca|| !modelo ||!ano ||!preço|| !imagem || !status){
    return res.status(400).send("Dados incompletos");
    }

    const pagamento = await pagamentosModel.getPagamentoByMarcaModel(marca);

    if(pagamento){
        return res.status(400).send("Pagamento já cadastrado");
    }

    next();
}

async function middlewareDeletePagamento(req, res ,next) {
    const{id} = req.params;
    
    if(!id){
        return res.status(400).send("Dados incompletos")
    }
    
const pagamento = await pagamentosModel.getPagamentoByIdModel(id);

    if(!pagamento){
        return res.status(404).send("Pagamento não encontrado");
    }

    next();
}


module.exports = {
    middlewareGetPagamentoById,
    middlewareUpdatePagamento,
    middlewaresInsertPagamento,
    middlewareDeletePagamento

}