var express = require('express');
var router = express.Router();

router.route('/notificar')
    .get(function (req, res) {
        res.json({
            message: process.env.NOTIFICATION_TEST_MESSAGE
        });
    });

module.exports = router;