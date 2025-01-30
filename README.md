# README - Projeto MVP de ChatBot Médico com IA

Este é um projeto implementado com **Node.js** no backend e **React Native** no frontend. O objetivo principal é construir um sistema de chat para gerar mensagens em um chat entre um user e uma inteligência artificial.

## Tecnologias Utilizadas

- **Node.js** - Para o backend da aplicação.
- **React Native** - Para o frontend, desenvolvendo a interface para dispositivos móveis.
- **OpenAI API** - Para integração com o modelo de linguagem da OpenAI.
- **Banco de Dados** - MySQL para armazenamento de dados de usuários e históricos de chat.

## Requisitos para Rodar o Projeto

### Dependências no React Native

Antes de iniciar o projeto, instale as dependências necessárias executando os seguintes comandos:

```bash
npm install react-native-gifted-chat --save
npm install react-native-uuid
npm install openai --save
npm install react-native-dotenv --save
npm install react-native-markdown-display --save
```

### Banco de Dados

Execute o seguinte script SQL para criar as tabelas no banco de dados MySQL:

```sql
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
```

### Rodando o Projeto

Para rodar o projeto, use o seguinte comando:

```bash
npm run start
```

Isso iniciará o servidor e a aplicação no React Native.

## Funcionalidades Implementadas

- **Login** - Permite ao usuário fazer login no sistema.
- **Cadastro de Usuários** - Permite a criação de um novo usuário com dados como nome, e-mail, telefone, CRM e senha.
- **Recuperação de Senha** - Envia um e-mail com um link para redefinir a senha. **Importante:** Para que a recuperação de senha funcione, é necessário configurar um e-mail válido de "no-reply" para envio.
- **Chat** - A funcionalidade de chat está implementada no front, mas ainda não está completamente funcional. O código para exibir os chats na página inicial está pronto, mas falta integrar a inteligência artificial para gerar as respostas dos chats. (está com a openIA por enquanto, o token precisa ser colocado num arquivo criado na raiz chamado .env. Só criar o arquivo e colocar OPENAI_API_KEY="token_aqui". é uma única linha mesmo).
- **Histórico de Chats** - O histórico de mensagens do chat será armazenado no banco de dados.

## Pendências

1. **Integração com a IA**: A parte do chat não está funcionando 100%. A integração com a IA que vai gerar as mensagens automaticamente ainda não foi implementada. No momento, os chats são apenas exibidos, mas não há interação automatizada.
   
2. **Salvamento de Histórico de Chat**: O código para salvar as mensagens de chat no banco de dados já está implementado, mas ainda precisa ser finalizado para armazenar o histórico de maneira eficaz.

## Observações

- Para enviar os e-mails de recuperação de senha, é necessário configurar um servidor de e-mail válido (ex: no-reply@dominio.com). Sem essa configuração, a funcionalidade de recuperação de senha não funcionará.
- A integração com a OpenAI para respostas no chat é uma das próximas etapas a serem implementadas. O token da OpenAI já está configurado, mas a lógica de geração das respostas precisa ser completada.

## Contribuição

Se você deseja contribuir para o projeto, por favor, faça um fork e envie um pull request com suas melhorias ou correções de bugs. 


---

Caso tenha dúvidas ou sugestões, fique à vontade para abrir uma **issue** ou entrar em contato! 😊

