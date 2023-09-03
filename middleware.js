var bodyParser = require('body-parser');
var emitir = function (req, res, next) {
    var notificar = req.query.notificacao || '';
    if (notificar != '') {
        io.emit('notificacao', notificar); 
        next(); 
    } else {
        next(); 
    }
};

module.exports = function (app, io) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(emitir);
};