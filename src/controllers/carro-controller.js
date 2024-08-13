const listaCarro = require("../mocks/listaCarro");
const carroModels = require("../models/carroModel");

async function getAllCarros(req, res) {
    const carros = await carroModels.getAllCarrosModel();

    return res.send(carros);
}

async function getCarroById(req, res){
    const { id } = req.params;
    const carro = await carroModels.getCarroByIdModel(id);

    return res.send(carro);
}

async function insertCarro(req,res) {
    const {
        marca,
        modelo,
        ano,
        preço,
        status,
    } = req.body;

    await carroModels.insertCarroModel(
        marca,
        modelo,
        ano,
        preço,
        status
    );

    return res.status(201).send("Carro inserido com sucesso")
}

async function updatePreço(req, res){
    const { id } = req.params;
    const {preço} = req.body;

    await carroModels.updatePreço(id, preço);

    return res.send("Preço atualizado com sucesso");
}

async function deleteCarro(req, res){
    const { id } = req.params;

    await carroModels.deleteCarroModel(id);

    return res.send("Carro retirado com sucesso");
}

module.exports ={
    getAllCarros,
    insertCarro,
    getCarroById,
    updatePreço,
    deleteCarro,
}