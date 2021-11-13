const _ = require('lodash');

var data = require('./db.json');
var sample = {
    id: 1,
    first_name: 'Kara-lynn',
    last_name: 'Batisse',
    email: 'kbatisse0@gnu.org',
    phone: '3906907026',
    location: 'Ust’-Abakan',
};

function capitalizeText(strings) {
    var _strings = strings.trim().split(' ');
    return _strings
        .map((_str) => {
            var __str = _str.toLowerCase();
            return __str.charAt(0).toUpperCase() + __str.slice(1);
        })
        .join(' ');
}

const findByFirstname = (first_name) => {
    var user = _.find(data, { first_name });
    if (user) {
        return user;
    } else {
        return false;
    }
};

const findById = (id) => {
    var user = _.find(data, { id });
    if (user) {
        return user;
    } else {
        return false;
    }
};

const findByLastname = (last_name) => {
    var user = _.find(data, { last_name });
    if (user) {
        return user;
    } else {
        return false;
    }
};

const findByEmail = (email) => {
    var user = _.find(data, { email });
    if (user) {
        return user;
    } else {
        return false;
    }
};

const findByPhone = (phone) => {
    var user = _.find(data, { phone });
    if (user) {
        return user;
    } else {
        return false;
    }
};

const findByLocation = (location) => {
    var user = _.find(data, { location });
    if (user) {
        return user;
    } else {
        return false;
    }
};

module.exports = {
    capitalizeText,
    findByFirstname,
    findById,
    findByLastname,
    findByEmail,
    findByPhone,
    findByLocation,
};
