var express = require('express');
var router = express.Router();
var data = require('../db.json');

const {
    capitalizeText,
    findByFirstname,
    findById,
    findByLastname,
    findByEmail,
    findByPhone,
    findByLocation,
} = require('../utils.js');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json(data);
});

router.get('/firstname/:firstname', function (req, res) {
    var name = capitalizeText(req.params.firstname);
    var user = findByFirstname(name);

    if (user) {
        res.json({
            status: 'success',
            data: user,
        });
    } else {
        res.json({
            error: 'No user like this',
        });
    }
});
module.exports = router;
