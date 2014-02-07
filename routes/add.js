var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var friend = {
		'name': req.query.name,
		'description': req.query.description,
		'imageURL': 'http://lorempixel.com/400/400/people'
	};
	data['friends'].push(friend);
	var list = data.friends;
	res.render('add', {'friends': list});

 }