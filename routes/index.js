// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	var friendList = data.friends;
	var name = req.query.name;
	var friend = {
		'name': req.query.name,
		'description': req.query.description,
		'imageURL': 'http://lorempixel.com/400/400/people'
	};
	data['friends'].push(friend);
	res.render('index', {'friends': friendList});
};

