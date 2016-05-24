var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Register Model
 * =============
 */

var Register = new keystone.List('Register', {
	nocreate: true,
	noedit: true
});

Register.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	enquiryType: { type: Types.Select, options: [
		{ value: 'Registration', label: 'Please let me know about what\'s happening with LoveBop' }
	] },
	message: { type: Types.Markdown},
	createdAt: { type: Date, default: Date.now }
});

Register.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Register.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Register.schema.methods.sendNotificationEmail = function(callback) {
	
	if ('function' !== typeof callback) {
		callback = function() {};
	}
	
	var enquiry = this;
	
	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {
		
		if (err) return callback(err);
		
		new keystone.Email('enquiry-notification').send({
			to: admins,
			from: {
				name: 'LoveBop',
				email: 'contact@lovebop.com'
			},
			subject: 'New Enquiry for LoveBop',
			enquiry: enquiry
		}, callback);
		
	});
	
};

Register.defaultSort = '-createdAt';
Register.defaultColumns = 'name, email, enquiryType, createdAt';
Register.register();
