var person = {
    save: function(req, res) {
        var base = db.model('person');

        var email = req.body.email,
            name = req.body.name,
            id = req.body.id;

        if (email && name) {
            var person = {'name': name, 'email': email};
            if (id) {
                base.update({_id: id}, person, {upsert: true}, function(err, p) {
                    if (err) {
                        console.log("Error: ", err);
                    } else {
                        console.log("Update Success")
                    }
                })
            } else {
                base.create(person);
                console.log("Create Success")
            }
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
            res.render('person/edit', {'title': 'Edit Person', 'person': person});
        });
    },
    remove: function(req, res) {
        var base = db.model('person');

        var id = req.params.id;

        var query = {_id: id};
        base.findOne(query, function(err, person) {
            person.remove();
            res.redirect('/persons');
        });
    }
}

module.exports = person;