var express = require('express');
var router = express.Router();
var data = require('../db.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json(data);
});

module.exports = router;
