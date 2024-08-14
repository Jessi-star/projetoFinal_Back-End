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
  const { veiculo_ID, cor, combustivel, quilometragem  } = req.body;

  if (!veiculo_ID || !cor || !combustivel || !quilometragem ) {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await clientesModel.insertCaractereClientesModel(veiculo_ID, cor, combustivel, quilometragem);

  if (clientes) {
    return res.status(400).send("Cliente já cadastrado");
  }

  next();
}

async function middlewareUpdateClientes(req, res, next) {
  const { id } = req.params;
  const { veiculo_ID, cor, combustivel, quilometragem } = req.body;

  if (!id || !veiculo_ID || !cor || !combustivel || !quilometragem)  {
    return res.status(400).send("Dados incompletos");
  }

  const clientes = await clientesModel.getCaractereClientesByIdModel(id);

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

  const clientes = await clientesModel.getCaractereClientesByIdModel(id);

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
