const ClientModel = require("../models/clientes-model");

async function middlewareGetClientById(req, res, next) {
  const { id } = req.params;
  const clientes = await ClientModel.getClientByIdModel(id);

  if (!clientes) {
    return res.status(404).send("Cliente não encontrado");
  }

  next();
}

async function middlewareInsertClient(req, res, next) {
  const { id, nome, cpf, telefone, email, endereço } = req.body;

  if (!id || !nome || !cpf || !telefone || !email || !endereço) {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await ClientModel.getClientByNameModel(nome);

  if (clientes) {
    return res.status(400).send("Cliente já cadastrado");
  }

  next();
}

async function middlewareUpdateClient(req, res, next) {
  const { id } = req.params;
  const { nome} = req.body;

  if (!id || !nome) {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await ClientModel.getClientByIdModel(id);

  if (!clientes) {
    return res.status(404).send("Cliente não encontrado");
  }

  next();
}

async function middlewareDeleteClient(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await ClientModel.getClientByIdModel(id);

  if (!clientes) {
    return res.status(404).send("Cliente não encontrado");
  }

  next();
}

module.exports = {
    middlewareGetClientById,
    middlewareInsertClient,
    middlewareUpdateClient,
    middlewareDeleteClient
};
