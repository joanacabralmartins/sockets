var express = require('express')

app = express()
server = require('http').createServer(app).listen(4555)
io = require('socket.io').listen(server)

module.exports = function emitir(req, res, next) {
    var notificar = req.query.notificacao || '';
    if (notificar != '') {
        io.emit('notificacao', notificar);
        next();
    } else {
        next();
    }
};
