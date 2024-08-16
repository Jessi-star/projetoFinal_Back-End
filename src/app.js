const express = require('express');
const router = require('./routers/router');
const routerCaracteristicaCarro = require('./routers/router-caracteristica-carro');
const routerUsers = require('./routers/router-users');

const app = express();
app.use(express.json());

app.use(router);
app.use(routerUsers);


app.use(routerCaracteristicaCarro);


module.exports = app;