const vendasModel = require("../models/animesModel")

async function middlewareGetVendasById(req, res, next) {
    const { id } = req.params;
    const vendas = await vendasModel.getVendasByIdModel(id);
    
    if(!vendas){
        return res.status(404).send("Vendas Não Encontradas")
    }

    next();
}

async function middlewaresInsertVendas(req, res, next) {
    const {
        id,
        id_veiculo,
        id_cliente,
        data_venda,
        valor_venda
    } = req.body;

    if(
        !id || !id_veiculo || !id_cliente || !data_venda || !valor_venda){
            return res.status(400).send("Dados Incompletos");
    }

    const vendas = await vendasModel.getVendasByNameModel(nome);

    if(vendas){
        return res.status(400).send("Venda Já Cadastrada");
    }
    next();

}

function middlewareUpdateVendas(req, res, next) {
    const { vendas } = req.params;
    const {preços} = req.body;

    if(!vendas || !preços){
        return res.status(404).send("Vendas Não Encontradas");
    }

    next();
}

async function middlewareDeleteVendas(req, res, next) {
    const { vendas } = req.params;

    if(!vendas){
        return res.status(400).send("Vendas Incompletas");
    }

    const venda = await vendasModel.getVendasByIdModel(id);

    if(!vendas){
        return res.status(404).send("Vendas Não Encontradas")
    }

    next();

}

module.exports = {
    middlewareGetVendasById,
    middlewaresInsertVendas,
    middlewareUpdateVendas,
    middlewareDeleteVendas
}