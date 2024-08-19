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

async function insertCaractereClientes(req,res){
    const {
        veiculo_ID,
        cor,
        combustivel,
        quilometragem,
    } = req.body;

    try{ 
        await clientesModel.insertCaractereClientesModel(
            veiculo_ID,
            cor,
            combustivel,
            quilometragem,
        );
   } catch(err){
     return res.status(400).send(err.message)
   }

    return res.status(201).send("Características do veículo inserido com sucesso");
}


async function updateCaractereClientes(req, res){
    const { id } = req.params;
    const {caracteristicas} = req.body;

    await clientesModel.updateClientesModel(id, caracteristicas);

    return res.send("Características atualizadas com sucesso");
}

const deleteCaractereClientes = async (req, res) => {
    const { id } = req.params;

    try {
        await clientesModel.deleteCaractereClientesModel(id);
        res.status(200).send(`Cliente com id ${id} deletado com sucesso`);
    } catch (error) {
        res.status(500).send("Erro ao deletar o cliente");
    }
};

module.exports = {
    getAllclientes,
    insertCaractereClientes,
    updateCaractereClientes,
    deleteCaractereClientes, 
};
