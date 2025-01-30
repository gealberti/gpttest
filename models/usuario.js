const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Modelo de Usuário
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  crm: {
    type: DataTypes.STRING,
  },
  uf: {
    type: DataTypes.STRING,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tokenSenha: {
    type: DataTypes.STRING,
  },
  dataCadastro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Usuario;
