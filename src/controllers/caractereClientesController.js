const caracteClientes = require("./carro-controller");
const clientesModel = require("../models/caracteClienteModel");

async function getAllclientes(req, res) {
    const clientes = await clientesModel.getAllCaractereClientesModel();

    return res.send(clientes);
}

async function getCaracteristicaClientes(req, res){
    const { id } = req.params;
    const clintes = await clientesModel.getAllCaractereClientesModel(id);

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


    try{ 
        await clientesModel.insertCaractereClientesModel(
            nome,
            cpf,
            telefone,
            email,
            endereco,
        );
   } catch(err){
     return res.status(400).send(err.message)
   }

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