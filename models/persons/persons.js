var person = function() {
    var Schema = require('mongoose').Schema;

    var person = Schema({
        name: {type: String, required: true},
        email: {type: String, required: true, index: {unique: true}}
    })

    return db.model('person', person);
}

module.exports = person;