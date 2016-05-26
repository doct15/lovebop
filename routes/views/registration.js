var keystone = require('keystone');
var Registration = keystone.list('Registration');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'registration';
	// locals.enquiryTypes = Registration.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	
	// On POST requests, add the Registration item to the database
	view.on('post', { action: 'registration' }, function(next) {

		var newRegistration = new Registration.model(),
			updater = newRegistration.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, message',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		
	});
	
	view.render('registration');
	
};
