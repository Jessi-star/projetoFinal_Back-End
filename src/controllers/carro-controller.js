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
        preco,
        status,
    } = req.body;

   try{ 
        await carroModels.insertCarroModel(
            marca,
            modelo,
            ano,
            preco,
            status
        );
   } catch(err){
     return res.status(400).send(err.message)
   }

    return res.status(201).send("Carro inserido com sucesso")
}

async function updatePreco(req, res){
    const { id } = req.params;
    const {preco} = req.body;

    await carroModels.updatePreco(id, preco);

    return res.send("Preço atualizado com sucesso");
}

async function deleteCarro(req, res){
    const { id } = req.params;

    await carroModels.deleteCarrosModel(id);

    return res.send("Carro retirado com sucesso");
}

module.exports ={
    getAllCarros,
    insertCarro,
    getCarroById,
    updatePreco,
    deleteCarro,
}