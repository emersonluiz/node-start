var express = require('express');
var router = express.Router();

var personController = require('./../controllers/persons/persons');

router.get('/', function(req, res) {
    personController.list(req, res);
});

router.get('/insert', function(req, res) {
    res.render('person/insert', {title: 'Insert Person'});
});

router.get('/edit/:id', function(req, res) {
    personController.load(req, res);
});

router.post('/save', function(req, res) {
    personController.save(req, res);
});

router.get('/remove/:id', function(req, res) {
    personController.remove(req, res);
})

module.exports = router;