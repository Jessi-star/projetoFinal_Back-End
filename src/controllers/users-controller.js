const userModel = require('../models/usersModel');
const encryptPassword = require("../helpers/encryptPassword");

async function createUser(req, res){
    const { nome, email, senha, perfil } = req.body;

    // const pass = await encryptPassword(senha);

    try {
        await userModel.insertUsersModel(nome, email, senha, perfil);
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.status(201).send("Usuário Cadastrado Com Sucesso")
}

async function getUserById(req, res){
    const {id} = req.params

    try {
        var user = await userModel.getUSerByIdModel(id);

    } catch (error) {
        return res
                 .status(400)
                 .send(error.message);
    }

    return res.status(200).send(user);

}

async function  deleteUser(req, res){
    const { id } = req.params
    
    try {
        await userModel.deleteUserModel(id);
    } catch (error) {
        return res
                 .status(400)
                 .send(reeor.message);
    }
    
    return res.status(200).send("Usuário Deletado Com Sucesso")
}

module.exports = {
    createUser,
    getUserById,
    deleteUser
}