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

// Testimonial.add({
// 	quote: { type: String, required: true, initial: false },
// 	author: { type: String, required: true, initial: false },
// 	url_name: { type: String },
// 	url: { type: String }
// });

Testimonial.add({ 
    title: { type: String, required: true },
    // state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    // author: { type: Types.Relationship, ref: 'User' },
    // createdAt: { type: Date, default: Date.now },
    // publishedAt: Date,
    quote: { type: String},
    author: { type: String},
    url_name: { type: String },
    url: { type: String }
});

Testimonial.register();
