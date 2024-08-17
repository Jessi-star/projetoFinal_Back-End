const userModel = require('../models/usersModel');

async function insertUsersMiddleware(req, res, next){
    const { nome, email, senha, perfil } = req.body;

    if(!nome || !email || !senha || !perfil) {
        return res.ststus(400).send("Dados Inválidos");
    }

    if (senha.length < 6) {
        return res.staus(400).send("A Senha Deve Ter Pelo Menos 6 Caracteres");
    }

    if(!email.includes('@') || !email.includes('.')) {
        return res.status(400).send("Email Inválido");
    }

    next();
}

async function getUserByIdMiddleware(req, res, next){
    const { id } =  req.params;

    if(!id) {
        return res.status(400).send("Dados Inválidos");
    }

    next();
}

async function deleteUserMiddleware(req, res, next){
    const { id } = req.params;

    if(!user) {
        return req.status(400).send("Dados Inválidos");
    }

    const user = await userModel.getUserByIdModel(id);

    if(!user) {
        return res.ststus(404).send("Usuário Não Encontrado");
    }

    next();
}

module.exports = {
    insertUsersMiddleware,
    getUserByIdMiddleware,
    deleteUserMiddleware
}