/*
config.js

This file consists of all of the variables that can be changed in order to set up the site information, 
artists and performances.

*/

var _fest_timing = {
	current_time : new Date(), 
	refresh_interval : 10000 // in milliseconds
};

// You can artificially adjust the start time to ensure that the lineup will render correctly at different times by 
// setting a date here
//_fest_timing.current_time = new Date(2013, 11, 21, 23, 59); // testing after the festival
//_fest_timing.current_time = new Date(2013, 9, 5, 20, 10); // testing 
//_fest_timing.current_time = new Date(2013, 9, 5, 21, 29, 50); // testing  schedule change
//_fest_timing.current_time = new Date(2013, 7, 11, 6, 0, 0); // testing no one playing

var _fest_messages =  {
	no_one_currently_playing : "No acts are currently playing. Please check the schedule for when the next act is playing.",
	pre_festival_message : "<h2 style='text-align:center'>Dayton Music Fest</h2><div style='text-align: center;'>" + 
		"<p style='font-weight: bold; font-size: larger;'>October 4th &amp; 5th</p>" +
		"<p><img src='images/dmf.jpg' alt='Dayton Music Fest'/></p>" +
		"</div>",
	post_festival_message : "<div style='text-align: center;'>" + 
		"<p><img src='images/dmf.jpg' alt='Dayton Music Fest'/></p>" + 
		"<p style='font-weight: bold;font-size:large;'>Thank you! See you next year!</p>" +
		"</div>",
	about_page_text : "<p><a href='http://www.daytonmusicfest.com'>Dayton Music Fest</a></p>" +
		"<p>Founded in 2004 by Dan Clayton , Andy Ingram, and Shawn Johnson, Dayton Music Fest sought to showcase the burgeoning music scene bustling in Dayton, OH. " + 
		"Long a cradle of exceptional creativity, Dayton’s underground talent often gets overlooked by the national scene, as well as those living in the region.</p>" +

		"<p>Now in its 9th year and curated by Don Thrasher & Kyle Melton, DMF seeks to shine a spotlight on Dayton's indie music scene, creating a " +
		"portrait of where the local scene stands circa 2013. In addition, we seek to showcase expatriates that reside in other areas of the country, but " +
		"still maintain ties to the Gem City. Taken altogether, DMF is an opportunity to enjoy the rich musical talents coming from Dayton.</p>" +

		"<p>With daytime events open to all ages, we hope that Dayton Music Fest is an event that brings out young and old alike to witness a unique musical event.</p>" +

		"<p>Kyle Melton &amp; Don Thrasher<br/>" +

		"DMF Organizers</p>" +
		'<p><a href="#home" data-direction="reverse" data-role="button" data-theme="b">Back to home</a></p>'
};

var _fest_pre_festival_message = "<h2 style='text-align:center'>Dayton Music Fest</h2><div style='text-align: center;'>" + 
	"<p style='font-weight: bold; font-size: larger;'>October 4th &amp; 5th</p>" +
	"<p><img src='images/dmf.jpg' alt='Dayton Music Fest'/></p>" +
	"</div>";

var _fest_post_festival_message = "<div style='text-align: center;'>" + 
	"<p><img src='images/dmf.jpg' alt='Dayton Music Fest'/></p>" + 
	"<p style='font-weight: bold;font-size:large;'>Thank you to everyone who made this year a success!</p>" +
	"</div>";

// Page Configuration Options
var _fest_info = {
	page_title : "Dayton Music Fest",
	copyright : "&copy; 2013 <a href='http://www.daytonmusicfest.com/'>Dayton Music Fest</a>"
};

// Sharing Information
var _fest_sharing_info = {
	name : "Dayton Music Fest Lineup",
	url :"http://2011.daytonmusicfest.com/mobile/",
	description : "Mobile site with the lineup for the 2013 Dayton Music Fest."
};

// Festival Day Definitions
// This section allows you to set what constitutes a day of the festival. The reason this exists is so late night sets 
// can be considered part of the previous day even if they are after midnight.
// The ID is the id of the page - make sure it's a valid, unique HTML element ID
var _fest_days = 
[
	{
		name : "Friday",
		start_date : new Date(2013, 9, 4, 11, 0),
		end_date : new Date(2013, 9, 5, 4, 59),
		id : "friday"
	},
	{
		name : "Saturday",
		start_date: new Date(2013, 9, 5, 5, 0),
		end_date : new Date(2013, 9, 6, 11, 0),
		id : "saturday"
	}
];

/*

*/
function get_festival_data()
{
	// *** Canal Street Tavern
	var cst = new Stage('Canal Street Tavern');
	
	// Friday
	var ths = new Artist('The Holy Smokes', 'https://www.facebook.com/theholysmokesdayton', '');
	cst.add_performance(ths, new Date(2013, 9, 4, 20, 00), 60);
	
	var tefd = new Artist('The 1984 Draft', 'https://www.facebook.com/The1984Draft', '');
	cst.add_performance(tefd, new Date(2013, 9, 4, 21, 00), 60);
	
	var steepwater = new Artist('The Steepwater Band', 'http://www.steepwater.com/', '');
	cst.add_performance(steepwater, new Date(2013, 9, 4, 22, 00), 60);
	
	var rescue = new Artist('Noah and The Rescue Radio', 'http://www.noahandtherescueradio.com/', '');
	cst.add_performance(rescue, new Date(2013, 9, 4, 23, 00), 60);
	
	var nightbeast = new Artist('Nightbeast', 'http://www.thenightbeast.com/', '');
	cst.add_performance(nightbeast, new Date(2013, 9, 5, 0, 00), 60);
	
	// Saturday
	var brat_curse = new Artist('Brat Curse', 'https://www.facebook.com/bratcurse', '');
	cst.add_performance(brat_curse, new Date(2013, 9, 5, 21, 30), 60);
	
	var boxcar_suite = new Artist('Tim Pritchard &amp; the Boxcar Suite', 'http://www.timpritchard.org/', '');
	cst.add_performance(boxcar_suite, new Date(2013, 9, 5, 22, 30), 60);
	
	var oh_condor = new Artist('Oh Condor', 'http://www.ohcondor.com/', '');
	cst.add_performance(oh_condor, new Date(2013, 9, 5, 23, 30), 60);
	
	var connections = new Artist('Connections', 'http://connectionsband.tumblr.com/', '');
	cst.add_performance(connections, new Date(2013, 9, 6, 00, 30), 60);
	
	// *** Midwest Outdoor Experience (Eastwood Metropark)
	var outdoor_exp = new Stage("Midwest Outdoor Experience (Eastwood Metropark)");
	
	// Saturday
	var josh_eagle =  new Artist('Josh Eagle', 'https://twitter.com/JoshEagleMusic', '');
	outdoor_exp.add_performance(josh_eagle, new Date(2013, 9, 5, 11, 00), 60);
	
	var good_english = new Artist('Good English', 'http://goodenglishband.com/', '');
	outdoor_exp.add_performance(good_english, new Date(2013, 9, 5, 12, 00), 60);
	
	var meghna = new Artist('Meghna &amp; the Majority', 'http://www.meghnamusic.com/', '');
	outdoor_exp.add_performance(meghna, new Date(2013, 9, 5, 13, 00), 60);
	
	var kris_n = new Artist('Kris N.', 'https://www.facebook.com/krisnpoptek', '');
	outdoor_exp.add_performance(kris_n, new Date(2013, 9, 5, 14, 00), 60);
	
	var jah_soul = new Artist('Jah Soul', 'http://www.jahsoulfamily.com', '');
	outdoor_exp.add_performance(jah_soul, new Date(2013, 9, 5, 15, 00), 60);
	
	var starving = new Artist('Dan Raridan', 'http://www.reverbnation.com/danraridan', '');
	outdoor_exp.add_performance(starving, new Date(2013, 9, 5, 16, 00), 60);
	
	var repeating_arms = new Artist('The Repeating Arms', 'http://www.reverbnation.com/therepeatingarms1', '');
	outdoor_exp.add_performance(repeating_arms, new Date(2013, 9, 5, 17, 00), 60);
	
	var new_vega = new Artist('New Vega', 'http://newvega.com/', '');
	outdoor_exp.add_performance(new_vega, new Date(2013, 9, 5, 18, 00), 60);
	
	var public_band = new Artist('Public', 'https://www.facebook.com/publictheband?sk=app_123966167614127', '');
	outdoor_exp.add_performance(public_band, new Date(2013, 9, 5, 19, 00), 60);
	
	// *** Blind Bobs
	var blind_bobs = new Stage('Blind Bob\'s');
	
	var speaking_suns = new Artist('Speaking Suns', 'http://speakingsuns.wordpress.com/', '');
	blind_bobs.add_performance(speaking_suns, new Date(2013, 9, 5, 21, 30), 60);
	
	var red_hot_rebellion = new Artist('Red Hot Rebellion', 'http://www.redhotrebellion.com', '');
	blind_bobs.add_performance(red_hot_rebellion, new Date(2013, 9, 5, 22, 30), 60);
	
	blind_bobs.add_performance(public_band, new Date(2013, 9, 5, 23, 30), 60);
	
	var motel_beds = new Artist('Motel Beds', 'http://brotelbeds.com/', '');
	blind_bobs.add_performance(motel_beds, new Date(2013, 9, 6, 00, 30), 60);
	
	// *** Oregon Express
	var oe  = new Stage("Oregon Express");
	
	var the_giant_steps = new Artist('The Giant Steps', 'http://thegiantsteps.net/', '');
	oe.add_performance(the_giant_steps, new Date(2013, 9, 5, 21, 00), 60);
	
	var playfully_yours = new Artist('Playfully Yours', 'https://www.facebook.com/yours.playfully', '');
	oe.add_performance(playfully_yours, new Date(2013, 9, 5, 22, 00), 60);
	
	var city_of_kings = new Artist('Dumbell', 'http://www.reverbnation.com/dumbell‎', '');
	oe.add_performance(city_of_kings, new Date(2013, 9, 5, 23, 00), 60);
	
	var team_void = new Artist('Team Void', 'http://www.reverbnation.com/teamvoidlucharockers', '');
	oe.add_performance(team_void, new Date(2013, 9, 6, 00, 00), 60);
	
	
	// *** Trolley Stop
	var trolley_stop = new Stage("Trolley Stop");
	
	var luke_frazier = new Artist('Luke Frazier', 'http://lukefrazier.bandcamp.com/', '');
	trolley_stop.add_performance(luke_frazier, new Date(2013, 9, 5, 21, 00), 60);
	
	var will_the_acct = new Artist('William the Accountant', 'http://www.williamtheaccountant.com/', '');
	trolley_stop.add_performance(will_the_acct, new Date(2013, 9, 5, 22, 00), 60);
	
	var trey_stone = new Artist('Trey Stone &amp; the Ringers', 'http://www.reverbnation.com/treystone777', '');
	trolley_stop.add_performance(trey_stone, new Date(2013, 9, 5, 23, 00), 60);
	
	trolley_stop.add_performance(new_vega, new Date(2013, 9, 6, 00, 00), 60);
	
	// *** Tumbleweed
	var tumbleweed = new Stage('Tumbleweed');
	
	var turkish_delights = new Artist('The Turkish Delights', 'http://www.reverbnation.com/theturkishdelights', '');
	tumbleweed.add_performance(turkish_delights, new Date(2013, 9, 5, 21, 30), 60);
	
	var new_old_fashioned = new Artist('The New Old-Fashioned', 'https://www.facebook.com/TheNewOldFashioned', '');
	tumbleweed.add_performance(new_old_fashioned, new Date(2013, 9, 5, 22, 30), 60);
	
	var abertooth_lincoln = new Artist('Abertooth Lincoln', 'http://www.reverbnation.com/abertoothlincoln', '');
	tumbleweed.add_performance(abertooth_lincoln, new Date(2013, 9, 5, 23, 30), 60);
	
	var parlour_tricks = new Artist('C. Wright\'s Parlour Tricks', 'http://www.reverbnation.com/cwrightsparlourtricks', '');
	tumbleweed.add_performance(parlour_tricks, new Date(2013, 9, 6, 00, 30), 60);
	
	
	var festival = new Festival("Dayton Music Fest");
	festival.add_stage(outdoor_exp);
	festival.add_stage(cst);
	festival.add_stage(blind_bobs);
	festival.add_stage(oe);
	festival.add_stage(trolley_stop);
	festival.add_stage(tumbleweed);
	
	return festival;

}