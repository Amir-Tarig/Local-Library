var express = require('express')
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('am so cool');
})

module.exports = router;



