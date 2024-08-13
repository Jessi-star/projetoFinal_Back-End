const vendasModel = require("../models/vendasModel");


async function getAllVendas(req, res) {
    const vendas = await vendasModel.getAllVendasModel();
    
    return res.send(vendas);
}

async function getVendasById(req, res){
    const { preço } = req.params;
    const vendas = await vendasModel.getVendasByIdModel(preço);

    return res.send(vendas);
}

async function insertVendas(req, res){
    const {
        id,
        id_cliente,
        valor_venda,
        data_venda
    } = req.body;

    await vendasModel.insertVendasModel(
        id,
        id_cliente,
        valor_venda,
        data_venda
    )

    res.status(201).send("Venda Feita Com Sucesso")
    
}

async function updateVendas(req, res){
    const { id } = req.params;
    const {preço} = req.body;

    await vendasModel.updateVendasModel(id, preço);

    return res.send("Venads Concluids Com Sucesso");
}

async function deleteVendas(req, res){
    const { id } = req.params;

    await vendasModel.deleteVendasModel(id);

    return res.send("Vendas Deletadas Com Sucesso");
}

module.exports = {
    getAllVendas,
    getVendasById,
    insertVendas,
    updateVendas,
    deleteVendas
}