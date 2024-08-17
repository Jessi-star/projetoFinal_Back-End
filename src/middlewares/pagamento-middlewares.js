const pagamentoModel = require("../models/pagamentoModel")

async function middlewareGetPagamentoById(res, res, next) {
    const {id} = req.params;
    const pagamento = await pagamentoModel.getPagamentoByIdModel(id);

    if(!pagamento){
        return res.status(404).send("Pagamento não encontrado")
    }

    next();
}

async function middlewareUpdatePagamento(req, res, next) {
    const {id} = req.params;
    const {preco} = req.body;

    if(!id|| !preco){
        return res.status(400).send("Dados incompletos")
    }

    const pagamento = await pagamentoModel.getPagamentoByIdModel(id);

    if(!pagamento){
        return res.status(404).send("Pagamento não encontrado");
    }

    next();

}

async function middlewareInsertPagamento(req, res, next) {
    const {
        modelo,
        preco,
        status
    } = req.body;

    if ( !modelo ||!preco || !status){
    return res.status(400).send("Dados incompletos");
    }

    const pagamento = await pagamentoModel.getPagamentoByMarcaModel(marca);

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
    
const pagamento = await pagamentoModel.getPagamentoByIdModel(id);

    if(!pagamento){
        return res.status(404).send("Pagamento não encontrado");
    }

    next();
}


module.exports = {
    middlewareGetPagamentoById,
    middlewareUpdatePagamento,
    middlewareInsertPagamento,
    middlewareDeletePagamento

}