var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Model
 * =============
 */

var Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { from: 'name', path: 'key', unique: true }
});

Event.add({ 
    title: { type: String, required: true },
    name: { type: String},
    location: { type: String},
    date: { type: Types.Date, format: "DD MMM YYYY" },
    start_at: { type: Types.Datetime, format: "HH:mm" },
    end_at: { type: Types.Datetime, format: "HH:mm" },
});

Event.register();