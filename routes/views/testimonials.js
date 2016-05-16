var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'testimonials';

	// Load the testimonials by sortOrder
	view.query('testimonials', keystone.list('Testimonial').model.find().sort('sortOrder'));
	
	// Render the view
	view.render('testimonials');
	
};
