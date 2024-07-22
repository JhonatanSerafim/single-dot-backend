const express   = require('express');
const server = express();

server.get('/', (req,res) => {
    return res.json({mensagem: 'API está em funcionamento'})
})

server .listen(3000, () => {
    console.log('Iniciado o servidor do Single Dot')
})