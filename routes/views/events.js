var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'events';

	// Load all categories
	view.on('init', function(next) {
		
		var q = keystone.list('Event').model.find().sort('sortOrder');

		q.exec(function(err, results) {
			
			for (i = 0; i < results.length; i ++) {

				results[i].formatted_date = results[i]._.start_at.format("D MMM YYYY");
				results[i].formatted_start_at = results[i]._.start_at.format("HH:mm");
				results[i].formatted_end_at = results[i]._.end_at.format("HH:mm");
			}
			next(err);

			locals.events = results;

			console.log(results);

		});
	});
	
	// Render the view
	view.render('events');
	
};
