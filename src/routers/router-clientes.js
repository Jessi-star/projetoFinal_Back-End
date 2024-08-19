const express = require("express");
const router = express.Router();

const authController = require("../controllers/clientes-auth-controller");
const authMiddleware = require("../middlewares/clientes-middlewares");
const usersController = require("../controllers/clientes-users-controller");
const middlewareUsers = require("../middlewares/clientes-middlewares");

router.post(
    '/login',
    authMiddleware.loginMiddleware,
    authController.login
);

router.post(
    "/users",
    middlewareUsers.insertUserMiddleware,
    usersController.createUser
);

router.get(
    "/users/:id",
    middlewareUsers.getUserByIdMiddleware,
    usersController.getUserById
);

router.delete(
    "/users/:id",
    middlewareUsers.deleteUserMiddleware,
    usersController.deleteUser
);

///

const ClientController = require("../controllers/clientes-controller");
const middlewareClient = require("../middlewares/clientes-middlewares");
const validateMiddleware = require("../middlewares/validate-middleware");

router.get("/clientes", animeController.getAllAnimes);
router.get(
  "/clientes/:id",
  middlewareClient.middlewareGetClientById,
  ClientController.getClientById
);
router.post(
  "/clientes/:id",
  validateMiddleware.validateTokenMiddleware,
  middlewareClient.middlewareInsertClient,
  ClientController.insertClient
);
router.put(
  "/clientes/:id",
  middlewareClient.middlewareUpdateClient,
  ClientController.updateClient
);
router.delete(
  "/clientes/:id",
  middlewareClient.middlewareDeleteClient,
  ClientController.deleteClient
);
module.exports = router;

