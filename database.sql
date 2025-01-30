
CREATE DATABASE app;
USE app;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    telefone VARCHAR(20),
    crm VARCHAR(20),
    uf VARCHAR(2),
    senha VARCHAR(255),
    tokenSenha VARCHAR(255),
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pacienteIniciais VARCHAR(3),
    sexo VARCHAR(10),
    idadeAnos INT,
    idadeMeses INT,
    especialidade VARCHAR(255),
    descricaoCaso TEXT
);

CREATE TABLE chat_historico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idChat INT,
    historicoMensagensJson JSON,
    dataUltimaMensagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),
    FOREIGN KEY (idChat) REFERENCES chats(id)
);
