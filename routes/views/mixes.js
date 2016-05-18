var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;


	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'mixes';

	// SC.initialize({
	//   client_id: '49e03c3eb1bf02dd893af9139687b041'
	// });

	// var track_url = 'http://soundcloud.com/forss/flickermood';

	// SC.oEmbed(track_url, { 
	// 	auto_play: true 
	// }).then(function(oEmbed) {
	//   console.log('oEmbed response: ', oEmbed);
	// });
	
	// Render the view
	view.render('mixes');
	
};
