// Importa as bibliotecas necessárias
var express = require('express'),

    app = express(),
    server = require('http').createServer(app).listen(4555), // Cria um servidor HTTP e o faz escutar na porta 4555
    io = require('socket.io').listen(server) // Cria uma instância do Socket.io e a conecta ao servidor

var port = process.env.PORT || 8080; // Define a porta padrão como 8080 caso não seja fornecida via variável de ambiente
var middleware = require('./middleware');
var router = require('./routes');

middleware(app, io);; // Utiliza o middleware de emissão de notificações
app.use('/api', router); // Define a rota base '/api' para o roteador

// Inicia o servidor na porta definida
app.listen(port);
console.log('Conectado à porta ' + port);