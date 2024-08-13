const caracteClientes = require("../controllers/carro-controller");
const clientesModel = require("../models/clientesModel");

async function getAllclientes(req, res) {
    const clientes = await clientesModel.getAllclientesModel();

    return res.send(clientes);
}

async function getCaracteristicaClientes(req, res){
    const { id } = req.params;
    const clintes = await clientesModel.getAllclientesModel(id);

    return res.send(clientes);
}

async function insertClientes(req,res){
    const {
        nome,
        cpf,
        telefone,
        email,
        endereco,
    } = req.body;

    await clientesModel.insertClientes(
        nome,
        cpf,
        telefone,
        email,
        endereco,
    );

    return res.status(201).send("Cliente inserido com sucesso");
}


async function updateClientes(req, res){
    const { id } = req.params;
    const {caracteristicas} = req.body;

    await clientesModel.updateClientesModel(id, caracteristicas);

    return res.send("Características atualizadas com sucesso");
}

async function deleteClientes(req, res){
    const { id } = req.params;

    await clientesModel.deleteClientesModel(id);

    return res.send("Cliente deletado com sucesso");
}

module.exports = {
    getAllclientes,
    getCaracteristicaClientes,
    insertClientes,
    deleteClientes,
    updateClientes,
}