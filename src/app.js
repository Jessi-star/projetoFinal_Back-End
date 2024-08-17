const express = require('express');
const router = require('./routers/router');
const routerUsers = require('./routers/router-users');
const routerAuth = require('./routers/router-auth');
const routerPagamentos= require('./routers/router-pagamentos');

const app = express();
app.use(express.json());

app.use(router);
app.use(routerUsers);
app.use(routerAuth);
app.use(routerPagamentos);

module.exports = app;