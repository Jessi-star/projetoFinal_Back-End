const caracteClientes = require("../controllers/carro-controller");
const clientesModel = require("../models/caracteClienteModel");

async function middlewareGetAllClientes(req, res, next) {
  const { id } = req.params;
  const clientes = await clientesModel.getAllCaractereClientesModel(id);

  if (!clientes) {
    return res.status(404).send("Cliente não encontrado");
  }

  next();
}

async function middlewareInsertClientes(req, res, next) {
  const { nome, cpf, telefone, email, endereco } = req.body;

  if (!nome || !cpf || !telefone || !email || !endereco) {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await clientesModel.getClientesByNameModel(nome);

  if (clientes) {
    return res.status(400).send("Cliente já cadastrado");
  }

  next();
}

async function middlewareUpdateClientes(req, res, next) {
  const { id } = req.params;
  const { caracteClientes } = req.body;

  if (!id || !caracteClientes) {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await clientesModel.getClientesByIdModel(id);

  if (!clientes) {
    return res.status(404).send("Cliente não encontrado");
  }

  next();
}

async function middlewareDeleteClientes(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await clientesModel.getClientesByIdModel(id);

  if (!clientes) {
    return res.status(404).send("Cliente não encontrado");
  }

  next();
}

module.exports = {
  middlewareGetAllClientes,
  middlewareInsertClientes,
  middlewareUpdateClientes,
  middlewareDeleteClientes,
};