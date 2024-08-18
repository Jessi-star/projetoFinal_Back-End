const clientModel = require("../models/clientes-model");

async function getAllClient(req, res) {
    const clientes = await ClientModelModel.getAllClientModel();

    return res.send(clientes);
}

async function getClientById(req, res){
    const { id } = req.params;
    const clientes = await ClientModel.getClientByIdModel(id);

    return res.send(clientes);
}

async function insertClient(req,res){
    const {
        id,
        nome,
        cpf,
        telefone, 
        email,
        senha,
        endereço
    } = req.body;

    await clientModel.insertClientModel(
        id,
        nome,
        cpf, 
        telefone,
        email,
        senha,
        endereço
    );

    return res.status(201).send("Cliente inserido com sucesso");
}


async function updateClient(req, res){
    const { id } = req.params;
    const {email} = req.body;

    await ClientModel.updateClientModel(id, email);

    return res.send("Cliente atualizado com sucesso");
}

async function deleteClient(req, res){
    const { id } = req.params;

    await ClientModel.deleteClientModel(id);

    return res.send("Cliente deletado com sucesso");
}

module.exports = {
    getAllClient,
    getClientById,
    insertClient,
    updateClient,
    deleteClient,
}