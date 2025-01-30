const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

async function cadastrar(req, res) {
  const { nome, email, telefone, crm, uf, senha } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } });

    if (usuarioExistente) {
      return res.status(400).json({ message: 'Este e-mail já está cadastrado!' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Criar o usuário
    const usuario = await Usuario.create({
      nome,
      email,
      telefone,
      crm,
      uf,
      senha: senhaCriptografada,
    });

    return res.status(201).json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar o usuário!', error });
  }
}

module.exports = { cadastrar };
