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

router.get('/id/:id', function (req, res) {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({
            error: 'id is required',
        });
    }

    var user = findById(id);

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

router.get('/firstname/:firstname', function (req, res) {
    var name = capitalizeText(req.params.firstname);

    if (!name) {
        res.status(400).json({
            error: 'firstname is required',
        });
    }
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

router.get('/lastname/:lastname', function (req, res) {
    var name = capitalizeText(req.params.lastname);
    if (!name) {
        res.status(400).json({
            error: 'lastname is required',
        });
    }
    var user = findByLastname(name);

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

router.get('/email/:email', function (req, res) {
    var email = req.params.email;
    if (!email) {
        res.status(400).json({
            error: 'email is required',
        });
    }
    var user = findByEmail(email);

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

router.get('/phone/:phone', function (req, res) {
    var phone = req.params.phone;
    if (!phone) {
        res.status(400).json({
            error: 'phone is required',
        });
    }
    var user = findByPhone(phone);

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
