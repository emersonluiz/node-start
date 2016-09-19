var person = {
    save: function(req, res) {
        var base = db.model('person');

        var email = req.body.email,
            name = req.body.name,
            id = req.body.id

        if (email && name) {
            var person = {'name': name, 'email': email};
            if (id) {
                person._id = id;
            }
            base.create(person);
            res.redirect('/persons');
        }
    },
    list: function(req, res) {
        var base = db.model('person');
        base.find({}, function(err, persons) {
            res.render('person/list', {'title': 'Listing Person', 'persons': persons});
        })
    },
    load: function(req, res) {
        var base = db.model('person');

        var id = req.params.id;

        var query = {_id: id};
        base.findOne(query, function(err, person) {
            person.remove(function() {
                res.render('person/edit', {'title': 'Edit Person', 'person': person});
            });
        });
    },
    remove: function(req, res) {
        var base = db.model('person');

        var id = req.params.id;

        var query = {_id: id};
        base.findOne(query, function(err, person) {
            person.remove(function() {
                res.redirect('/persons');
            });
        });
    }
}

module.exports = person;