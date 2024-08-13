const clientModel = require('../models/clientes-model');

async function createUser(req, res){
    const { nome, email } = req.body;


    try {
        await clientModel.insertUserModel(nome, email);
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(201).send("Usuário inserido com sucesso");
}

async function getUserById(req, res){
    const {id} = req.params

    try {
        var user = await clientModel.getUserByIdModel(id);
        
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(200).send(user);
}

async function deleteUser(req, res){
    const { id } = req.params

    try {
        await clientModel.deleteUserModel(id);    
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(200).send("Usuário deletado com sucesso");
}

module.exports = {
    createUser,
    getUserById,
    deleteUser
}