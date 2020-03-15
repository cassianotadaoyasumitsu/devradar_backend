  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const routes = require('./routes');

  const app = express();

  mongoose.connect('mongodb+srv://cassiano:Cassian0@cluster0-scfxn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.listen(3333);






  // Métodos http: get, post, put, delete

  // Tipos de parametros

  // Query Params: req.query (Filtros, ordenaçao, paginaçao, buscas ...)

  // Route Params: req.params (Identifica recurso na alteraçao ou remoçao)

  // Body: req.body (Dados para criaçao ou alteraçao de um registro)

  // MongoDB (Não-relacional)
  