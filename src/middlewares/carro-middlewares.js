const listaCarros = require("../mocks/listaCarro");
const carroModels = require("../models/carroModel");

async function middlewareGetCarroById(req, res, next) {
    const { id } = req.params;
    const carro = await carroModels.getCarroByIdModel(id);

    if (!carro) {
        return res.status(404).send("Carro não encontrado");
    }

    next();
}

async function middlewareInsertCarro(req, res, next) {
    const { marca, modelo, ano, preco, status } = req.body;

    if (!marca || !modelo || !ano || !preco || !status) {
        return res.status(400).send("Dados incompletos");
    }

    next();
}

async function middlewareUpdateCarro(req, res, next) {
    const { id } = req.params;
    const { preço } = req.body;

    if (!id || !preço) {
        return res.status(400).send("Dados incompletos");
    }

    const carro = await carroModels.getCarroByIdModel(id);

    if (!carro) {
        return res.status(404).send("Carro não encontrado");
    }

    next();
}

async function middlewareDeleteCarro(req, res, next) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send("Dados incompletos");
    }

    const carro = await carroModels.getCarroByIdModel(id);

    if (!carro) {
        return res.status(404).send("carro não encontrado");
    }

    next();
}

module.exports = {
    middlewareGetCarroById,
    middlewareInsertCarro,
    middlewareUpdateCarro,
    middlewareDeleteCarro,
}