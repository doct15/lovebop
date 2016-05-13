var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * =============
 */

var Testimonial = new keystone.List('Testimonial', {
	map: { name: 'title' },
	autokey: { from: 'name', path: 'key', unique: true }
});

Testimonial.add({
	quote: { type: String, required: true, initial: false },
	author: { type: String, required: true, initial: false },
	url_name: { type: String },
	url: { type: String }
});

Testimonial.register();
