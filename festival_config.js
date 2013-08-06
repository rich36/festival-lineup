/*
config.js

This file consists of all of the variables that can be changed in order to set up the site information, 
artists and performances.

*/

var _fest_timing = {
	current_time : new Date(), 
	refresh_interval : 10000 // in milliseconds
};

// You can artifically adjust the start time to ensure that the lineup will render correctly at different times by 
// setting a date here
//_fest_timing.current_time = new Date(2013, 11, 21, 23, 59); // testing after the festival
//_fest_timing.current_time = new Date(2013, 7, 10, 20, 10); // testing 
//_fest_timing.current_time = new Date(2013, 7, 10, 21, 29, 50); // testing  schedule change
//_fest_timing.current_time = new Date(2013, 7, 11, 6, 0, 0); // testing no one playing

var _fest_messages =  {
	no_one_currently_playing : "No acts are currently playing. Please check the schedule for when the next act is playing.",
	pre_festival_message : "<h2 style='text-align:center'>Miami Valley Music Fest</h2><div style='text-align: center;'>" + 
		"<p style='font-weight: bold; font-size: larger;'>August 9th - 10th</p>" +
		"<p><img src='images/mvmf.jpg' alt='Miami Valley Music Fest'/></p>" + 
		"<p style='font-weight: bold;'><a href='http://www.miamivalleymusicfest.com/tickets/' target='_blank'>Buy Tickets Here</a></p>" +
		"<p style='font-size:smaller'>*Special early bird set from 701 Ashbury on Thursday the 8th at 8:00 PM</p>" +
		"</div>",
	post_festival_message : "<div style='text-align: center;'>" + 
		"<p><img src='images/mvmf.jpg' alt='Miami Valley Music Fest'/></p>" + 
		"<p style='font-weight: bold;font-size:large;'>Thank you! See you next year!</p>" +
		"</div>",
	about_page_text : "<p><a href='http://www.miamivalleymusicfest.com'>Miami Valley Music Fest</a></p>" +
		"<p>The Miami Valley Music Festival Association is a 501(c)(3) public charity organized in Miami County, OH " +
		"with the purpose of hosting music events to raise funds and awareness for local charitable causes. Their &quot;Charity Rocks!&quot; " + 
		"initiative seeks to educate the public on opportunities to give back to the community, and expose younger " + 
		"festival audiences to the public services offered by non-profit organizations. The MVMFA continually develops " +
		"programming that shows how charitable giving cannot only be easy and accessible, but also fun.</p>" +
		
		"<h3>MISSION</h3>" +
		
		"<p>To gather people together to celebrate life in a way that is beneficial to themselves and their " + 
		"community; to promote musical diversity, local artists, and charitable giving; and to enhance the mind, " +
		"body, and spirit of all who attend the festival.</p>" +
		
		'<p><a href="#home" data-direction="reverse" data-role="button" data-theme="b">Back to home</a></p>'
};

var _fest_pre_festival_message = "<h2 style='text-align:center'>Miami Valley Music Fest</h2><div style='text-align: center;'>" + 
	"<p style='font-weight: bold; font-size: larger;'>August 9th - 10th</p>" +
	"<p><img src='images/mvmf.jpg' alt='Miami Valley Music Fest'/></p>" + 
	"<p style='font-weight: bold;'><a href='http://www.miamivalleymusicfest.com/tickets/' target='_blank'>Buy Tickets Here</a></p>" +
	"</div>";

var _fest_post_festival_message = "<div style='text-align: center;'>" + 
	"<p><img src='images/mvmf.jpg' alt='Miami Valley Music Fest'/></p>" + 
	"<p style='font-weight: bold;font-size:large;'>Thank you to everyone who made this year a success!</p>" +
	"</div>";

// Page Configuration Options
var _fest_info = {
	page_title : "Miami Valley Music Fest",
	copyright : "&copy; 2013 <a href='http://www.miamivalleymusicfest.com/'>Miami Valley Music Fest</a>"
};

// Sharing Information
var _fest_sharing_info = {
	name : "Miami Valley Music Fest Lineup",
	url :"m.miamivalleymusicfest.com",
	description : "Mobile site with the lineup for the 2013 Miami Valley Music Fest."
};

// Festival Day Definitions
// This section allows you to set what constitutes a day of the festival. The reason this exists is so late night sets 
// can be considered part of the previous day even if they are after midnight.
// The ID is the id of the page - make sure it's a valid, unique HTML element ID
var _fest_days = 
[
	{
		name : "Thursday",
		start_date : new Date(2013, 7, 8, 11, 0),
		end_date : new Date(2013, 7, 9, 4, 59),
		id : "Thursday"
	},
	{
		name : "Friday",
		start_date : new Date(2013, 7, 9, 11, 0),
		end_date : new Date(2013, 7, 10, 4, 59),
		id : "friday"
	},
	{
		name : "Saturday",
		start_date: new Date(2013, 7, 10, 5, 0),
		end_date : new Date(2013, 7, 11, 11, 0),
		id : "saturday"
	}
];

/*

*/
function get_festival_data()
{
	// *** Charity Stage
	var stage_1 = new Stage('Stage 1 - Main Stage');
	
	// Friday
	var sol = new Artist('SOL', '', '');
	stage_1.add_performance(sol, new Date(2013, 7, 9, 16, 00), 60);
	
	var aliver_hall = new Artist('Aliver Hall', '', '');
	stage_1.add_performance(aliver_hall, new Date(2013, 7, 9, 19, 00), 60);
	
	var spikedrivers = new Artist('Spikedrivers', '', '');
	stage_1.add_performance(spikedrivers, new Date(2013, 7, 9, 21, 30), 90);
	
	// Saturday
	var such_a_night = new Artist('Such a Night (The Last Waltz)', '', '');
	stage_1.add_performance(such_a_night, new Date(2013, 7, 10, 11, 00), 120);
	
	var subterranean_house_band = new Artist('Subterranean House Band', '', '');
	stage_1.add_performance(subterranean_house_band, new Date(2013, 7, 10, 14, 00), 60);
	
	var grover = new Artist('Grover', '', '');
	stage_1.add_performance(grover, new Date(2013, 7, 10, 16, 00), 60);
	
	var glostik_willy = new Artist('Glostik Willy', '', '');
	stage_1.add_performance(glostik_willy, new Date(2013, 7, 10, 18, 00), 60);
	
	var demolition_crew = new Artist('Demolition Crew', '', '');
	stage_1.add_performance(demolition_crew, new Date(2013, 7, 10, 20, 00), 60);
	
	var signs_of_life = new Artist('Signs of Life', '', '');
	stage_1.add_performance(signs_of_life, new Date(2013, 7, 10, 23, 00), 75);

	
	// *** WYSO Stage
	var stage_2 = new Stage("Stage 2");
	
	// Friday
	var terrapin_moon = new Artist('Terrapin Moon', 'http://terrapinmoon.net/', '');
	stage_2.add_performance(terrapin_moon, new Date(2013, 7, 9, 18, 00), 60);
	
	var mike_perkins = new Artist('Mike Perkins', '', '');
	stage_2.add_performance(mike_perkins, new Date(2013, 7, 9, 20, 00), 60);
	
	var lost_on_iddings = new Artist('Lost on Iddings/Bellydancers', 'http://www.lostoniddings.com/', '');
	stage_2.add_performance(lost_on_iddings, new Date(2013, 7, 9, 23, 30), 75);
	
	// Saturday
	var will_c_family =  new Artist('Will C and F.A.M.!.L.Y.', '', '');
	stage_2.add_performance(will_c_family, new Date(2013, 7, 10, 13, 00), 60);
	
	var jdreads_mystiks = new Artist('Jonny Dreads and The Mystiks', '', '');
	stage_2.add_performance(jdreads_mystiks, new Date(2013, 7, 10, 15, 00), 60);
	
	var jones_for_revival = new Artist('Jones For Revival', '', '');
	stage_2.add_performance(jones_for_revival, new Date(2013, 7, 10, 17, 00), 60);
	
	var jah_soul = new Artist('Jah Soul', 'http://www.jahsoulfamily.com', '');
	stage_2.add_performance(jah_soul, new Date(2013, 7, 10, 19, 00), 60);
	
	var big_damn_jam = new Artist('Big Damn Jam', '', '');
	stage_2.add_performance(big_damn_jam, new Date(2013, 7, 10, 21, 00), 60);
	
	// *** Indoor Stage
	var stage_3 = new Stage('Stage 3');
	
	// Thursday
	var _701_ashbury = new Artist('701 Ashbury', '', '');
	stage_3.add_performance(_701_ashbury, new Date(2013, 7, 8, 20, 00), 120);
	
	// Friday
	var fables = new Artist('Fables', '', '');
	stage_3.add_performance(fables, new Date(2013, 7, 9, 17, 30), 60);
	
	var fox_n_hounds = new Artist('Fox-n-Hounds', '', '');
	stage_3.add_performance(fox_n_hounds, new Date(2013, 7, 9, 19, 00), 60);
	
	var city_of_kings = new Artist('City of Kings', '', '');
	stage_3.add_performance(city_of_kings, new Date(2013, 7, 9, 20, 30), 60);
	
	var paradijm_shift = new Artist('Paradijm Shift', '', '');
	stage_3.add_performance(paradijm_shift, new Date(2013, 7, 9, 22, 00), 60);
	
	var dc_connection = new Artist('DC Connection', '', '');
	stage_3.add_performance(dc_connection, new Date(2013, 7, 9, 23, 30), 60);

	// Saturday
	var mystical_flutes = new Artist('Mystical Flutes and Drums', '', '');
	stage_3.add_performance(mystical_flutes, new Date(2013, 7, 10, 10, 00), 60);
	
	var element_earth = new Artist('Element Earth', '', '');
	stage_3.add_performance(element_earth, new Date(2013, 7, 10, 12, 00), 60);
	
	var hazy_rugged = new Artist('Hazy and The Rugged Child', '', '');
	stage_3.add_performance(hazy_rugged, new Date(2013, 7, 10, 13, 30), 60);
	
	var emily_lost_cat = new Artist('Emily and The Lost Cat Ramblers', '', '');
	stage_3.add_performance(emily_lost_cat, new Date(2013, 7, 10, 15, 00), 60);
	
	var belly_dancers = new Artist('Belly Dancers', '', '');
	stage_3.add_performance(belly_dancers, new Date(2013, 7, 10, 16, 30), 60);
	
	var prophets_mire = new Artist('Prophets Mire', '', '');
	stage_3.add_performance(prophets_mire, new Date(2013, 7, 10, 18, 00), 60);
	
	var kris_hanson = new Artist('Kris Hanson', '', '');
	stage_3.add_performance(kris_hanson, new Date(2013, 7, 10, 19, 30), 60);
	
	var elektrobek = new Artist('Elektrobek', '', '');
	stage_3.add_performance(elektrobek, new Date(2013, 7, 10, 21, 00), 60);
	
	var box_truck_rescue = new Artist('Box Truck Rescue', '', '');
	stage_3.add_performance(box_truck_rescue, new Date(2013, 7, 10, 22, 30), 60);
	
	var hieronymus_project = new Artist('The Hieronymus Project', '', '');
	stage_3.add_performance(hieronymus_project, new Date(2013, 7, 11, 00, 00), 60);
	
	// *** Acoustic Stage
	// Friday
	var acoustic_stage = new Stage("Acoustic Stage");
	
	var the_reflection = new Artist('The Reflection', '', '');
	acoustic_stage.add_performance(the_reflection, new Date(2013, 7, 9, 17, 45), 60);
	
	var joe_gillis = new Artist('Joeseph Gillis', '', '');
	acoustic_stage.add_performance(joe_gillis, new Date(2013, 7, 9, 19, 15), 60);
	
	var cinder_home = new Artist('Cinder Home', '', '');
	acoustic_stage.add_performance(cinder_home, new Date(2013, 7, 9, 20, 45), 60);
	
	var far_from_eden = new Artist('Far From Eden', '', '');
	acoustic_stage.add_performance(far_from_eden, new Date(2013, 7, 9, 22,15), 60);
	
	var stillwater_river_band = new Artist('Stillwater River Band ', '', '');
	acoustic_stage.add_performance(stillwater_river_band, new Date(2013, 7, 10, 00, 00), 75);	
	
	// Saturday
	var megan_o = new Artist('Megan Osman', '', '');
	acoustic_stage.add_performance(megan_o, new Date(2013, 7, 10, 12, 00), 75);	
	
	var sweet_betsy = new Artist('Sweet Betsy', '', '');
	acoustic_stage.add_performance(sweet_betsy, new Date(2013, 7, 10, 13, 30), 75);	
	
	var ambrogi_bros = new Artist('The Bros. Ambrogi', '', '');
	acoustic_stage.add_performance(ambrogi_bros, new Date(2013, 7, 10, 15, 00), 75);	
	
	var scott_lee = new Artist('Scott Lee and the Whiskey River Boys', '', '');
	acoustic_stage.add_performance(scott_lee, new Date(2013, 7, 10, 16, 30), 75);
	
	var sharon_lane = new Artist('Sharon Lane', '', '');
	acoustic_stage.add_performance(sharon_lane, new Date(2013, 7, 10, 18, 00), 75);	
	
	var higgins_madewell = new Artist('Higgins-Madewell', '', '');
	acoustic_stage.add_performance(higgins_madewell, new Date(2013, 7, 10, 17, 30), 75);	

	var the_repeating_arms = new Artist('The Repeating Arms', '', '');
	acoustic_stage.add_performance(the_repeating_arms, new Date(2013, 7, 10, 21, 30), 75);	
	
	var gin_soaked_angels = new Artist('Gin Soaked Angels', '', '');
	acoustic_stage.add_performance(gin_soaked_angels, new Date(2013, 7, 10, 32, 00), 75);	
	
	var rumpke_mountain_boys = new Artist('Rumpe Mountain Boys', '', '');
	acoustic_stage.add_performance(rumpke_mountain_boys, new Date(2013, 7, 11, 00, 30), 90);	

	var festival = new Festival("Miami Valley Music Fest");
	festival.add_stage(stage_1);
	festival.add_stage(stage_2);
	festival.add_stage(stage_3);
	festival.add_stage(acoustic_stage);
	
	return festival;

}