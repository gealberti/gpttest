const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',  // ou 'postgres' se estiver usando PostgreSQL
  host: 'localhost',
  username: 'root',  // Substitua pelo seu usuário de banco de dados
  password: 'senha', // Substitua pela sua senha
  database: 'app', // Nome do banco de dados
});

module.exports = sequelize;
