const express = require('express');
const publicoRouter = express.Router();

// Define uma rota para a página inicial do seu site
publicoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML da página inicial como resposta para a solicitação HTTP
    res.sendFile('templates/frontEnd/projeto.html');
});

module.exports = publicoRouter;