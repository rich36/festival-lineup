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
		"<p style='font-weight: bold;'><a href='http://www.daytonmusicfest.com/' target='_blank'>Buy Tickets Here</a></p>" +
		"</div>",
	post_festival_message : "<div style='text-align: center;'>" + 
		"<p><img src='images/dmf.jpg' alt='Dayton Music Fest'/></p>" + 
		"<p style='font-weight: bold;font-size:large;'>Thank you! See you next year!</p>" +
		"</div>",
	about_page_text : "<p><a href='http://www.daytonmusicfest.com'>Dayton Music Fest</a></p>" +
		"<p>(About text here)</p>" +
		'<p><a href="#home" data-direction="reverse" data-role="button" data-theme="b">Back to home</a></p>'
};

var _fest_pre_festival_message = "<h2 style='text-align:center'>Dayton Music Fest</h2><div style='text-align: center;'>" + 
	"<p style='font-weight: bold; font-size: larger;'>October 4th &amp; 5th</p>" +
	"<p><img src='images/dmf.jpg' alt='Dayton Music Fest'/></p>" + 
	"<p style='font-weight: bold;'><a href='http://www.daytonmusicfest.com/' target='_blank'>Buy Tickets Here</a></p>" +
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
	url :"m.daytonmusicfest.com",
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
	var such_a_night = new Artist('Such a Night (The Last Waltz)', '', '');
	cst.add_performance(such_a_night, new Date(2013, 9, 5, 11, 00), 120);
	
	var subterranean_house_band = new Artist('Subterranean House Band', '', '');
	cst.add_performance(subterranean_house_band, new Date(2013, 9, 5, 14, 00), 60);
	
	var grover = new Artist('Grover', '', '');
	cst.add_performance(grover, new Date(2013, 9, 5, 16, 00), 60);
	
	var glostik_willy = new Artist('Glostik Willy', '', '');
	cst.add_performance(glostik_willy, new Date(2013, 9, 5, 18, 00), 60);
	
	var demolition_crew = new Artist('Demolition Crew', '', '');
	cst.add_performance(demolition_crew, new Date(2013, 9, 5, 20, 00), 60);
	
	var signs_of_life = new Artist('Signs of Life', '', '');
	cst.add_performance(signs_of_life, new Date(2013, 9, 5, 23, 00), 75);

	
	// *** WYSO Stage
	var outdoor_exp = new Stage("Stage 2");
	
	// Saturday
	var josh_eagle =  new Artist('Josh Eagle', 'https://twitter.com/JoshEagleMusic', '');
	outdoor_exp.add_performance(josh_eagle, new Date(2013, 9, 5, 11, 00), 60);
	
	var jdreads_mystiks = new Artist('Jonny Dreads and The Mystiks', '', '');
	outdoor_exp.add_performance(jdreads_mystiks, new Date(2013, 9, 5, 12, 00), 60);
	
	var jones_for_revival = new Artist('Jones For Revival', '', '');
	outdoor_exp.add_performance(jones_for_revival, new Date(2013, 9, 5, 17, 00), 60);
	
	var jah_soul = new Artist('Jah Soul', 'http://www.jahsoulfamily.com', '');
	outdoor_exp.add_performance(jah_soul, new Date(2013, 9, 5, 19, 00), 60);
	
	var big_damn_jam = new Artist('Big Damn Jam', '', '');
	outdoor_exp.add_performance(big_damn_jam, new Date(2013, 9, 5, 21, 00), 60);
	
	// *** Indoor Stage
	var stage_3 = new Stage('Stage 3');
	
	// Saturday
	var mystical_flutes = new Artist('Mystical Flutes and Drums', '', '');
	stage_3.add_performance(mystical_flutes, new Date(2013, 9, 5, 10, 00), 60);
	
	var element_earth = new Artist('TBA', '', '');
	stage_3.add_performance(element_earth, new Date(2013, 9, 5, 12, 00), 60);
	
	var hazy_rugged = new Artist('Hazy and The Rugged Child', '', '');
	stage_3.add_performance(hazy_rugged, new Date(2013, 9, 5, 13, 30), 60);
	
	var emily_lost_cat = new Artist('Emily and The Lost Cat Ramblers', '', '');
	stage_3.add_performance(emily_lost_cat, new Date(2013, 9, 5, 15, 00), 60);
	
	var belly_dancers = new Artist('Belly Dancers', '', '');
	stage_3.add_performance(belly_dancers, new Date(2013, 9, 5, 16, 30), 60);
	
	var prophets_mire = new Artist('Prophets Mire', '', '');
	stage_3.add_performance(prophets_mire, new Date(2013, 9, 5, 18, 00), 60);
	
	var kris_hanson = new Artist('Kris Hanson', '', '');
	stage_3.add_performance(kris_hanson, new Date(2013, 9, 5, 19, 30), 60);
	
	var elektrobek = new Artist('Elektrobek', '', '');
	stage_3.add_performance(elektrobek, new Date(2013, 9, 5, 21, 00), 60);
	
	var box_truck_rescue = new Artist('Box Truck Rescue', '', '');
	stage_3.add_performance(box_truck_rescue, new Date(2013, 9, 5, 22, 30), 60);
	
	var hieronymus_project = new Artist('The Hieronymus Project', '', '');
	stage_3.add_performance(hieronymus_project, new Date(2013, 7, 11, 00, 00), 60);
	
	// *** Acoustic Stage
	var acoustic_stage = new Stage("Acoustic Stage");
	
	// Saturday
	var megan_o = new Artist('Megan Osman', '', '');
	acoustic_stage.add_performance(megan_o, new Date(2013, 9, 5, 12, 00), 75);	
	
	var sweet_betsy = new Artist('Sweet Betsy', '', '');
	acoustic_stage.add_performance(sweet_betsy, new Date(2013, 9, 5, 13, 30), 75);	
	
	var ambrogi_bros = new Artist('The Bros. Ambrogi', '', '');
	acoustic_stage.add_performance(ambrogi_bros, new Date(2013, 9, 5, 15, 00), 75);	
	
	var scott_lee = new Artist('Scott Lee and the Whiskey River Boys', '', '');
	acoustic_stage.add_performance(scott_lee, new Date(2013, 9, 5, 16, 30), 75);
	
	var sharon_lane = new Artist('Sharon Lane', '', '');
	acoustic_stage.add_performance(sharon_lane, new Date(2013, 9, 5, 18, 00), 75);	
	
	var higgins_madewell = new Artist('Higgins-Madewell', '', '');
	acoustic_stage.add_performance(higgins_madewell, new Date(2013, 9, 5, 17, 30), 75);	

	var the_repeating_arms = new Artist('The Repeating Arms', '', '');
	acoustic_stage.add_performance(the_repeating_arms, new Date(2013, 9, 5, 21, 30), 75);	
	
	var gin_soaked_angels = new Artist('Gin Soaked Angels', '', '');
	acoustic_stage.add_performance(gin_soaked_angels, new Date(2013, 9, 5, 23, 00), 75);	
	
	var rumpke_mountain_boys = new Artist('Rumpe Mountain Boys', '', '');
	acoustic_stage.add_performance(rumpke_mountain_boys, new Date(2013, 7, 11, 00, 30), 90);	

	var festival = new Festival("Dayton Music Fest");
	festival.add_stage(cst);
	festival.add_stage(outdoor_exp);
	festival.add_stage(stage_3);
	festival.add_stage(acoustic_stage);
	
	return festival;

}