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
    title: { type: String, required: true },
    quote: { type: String},
    author: { type: String},
    url_name: { type: String },
    url: { type: String }
});

Testimonial.register();
