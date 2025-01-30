const Usuario = require('../models/usuario'); // Importa o modelo do usuário
const bcrypt = require('bcryptjs'); // Para comparar a senha
const jwt = require('jsonwebtoken'); // Para gerar o token JWT
require('dotenv').config(); 

async function login(req, res) {
  try {
    const { email, senha } = req.body;

    // Verifica se os campos foram preenchidos
    if (!email || !senha) {
      return res.status(400).json({ message: 'Preencha todos os campos!' });
    }

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ message: 'Usuário ou senha incorretos!' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Usuário ou senha incorretos!' });
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, {
      expiresIn: '7d', // Token expira em 7 dias
    });

    return res.status(200).json({
      message: 'Login realizado com sucesso!',
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
    });

  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
}

module.exports = { login };
