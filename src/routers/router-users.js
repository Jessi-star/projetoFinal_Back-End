const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controller');
const middlewareUsers = require("../middlewares/users-middleware");

router.post(
    "/users",
    middlewareUsers.insertUsersMiddleware,
    usersController.createUser
);

router.get(
    "/users/:id",
    middlewareUsers.getUserByIdMiddleware,
    usersController.getUserById
);

router.delete(
    "users/:id",
    middlewareUsers.deleteUserMiddleware,
    usersController.deleteUser
);

module.exports = router;