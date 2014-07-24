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
//_fest_timing.current_time = new Date(2014, 11, 21, 23, 59); // testing after the festival
//_fest_timing.current_time = new Date(2014, 7, 2, 20, 10); // testing 
//_fest_timing.current_time = new Date(2014, 7, 2, 21, 29, 50); // testing  schedule change
//_fest_timing.current_time = new Date(2014, 7, 11, 6, 0, 0); // testing no one playing

var _fest_messages =  {
	no_one_currently_playing : "No acts are currently playing. Please check the schedule for when the next act is playing.",
	pre_festival_message : "<h2 style='text-align:center'>Miami Valley Music Fest</h2><div style='text-align: center;'>" + 
		"<p style='font-weight: bold; font-size: larger;'>August 1st - 2nd</p>" +
		"<p><img src='images/mvmf.jpg' alt='Miami Valley Music Fest'/></p>" + 
		"<p style='font-weight: bold;'><a href='http://www.miamivalleymusicfest.com/tickets/' target='_blank'>Buy Tickets Here</a></p>" +
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
	"<p style='font-weight: bold; font-size: larger;'>August 1st - 2nd</p>" +
	"<p><img src='images/mvmf.jpg' alt='Miami Valley Music Fest'/></p>" + 
	"<p style='font-weight: bold;'><a href='http://www.miamivalleymusicfest.com/tickets/' target='_blank'>Buy Tickets Here</a></p>" +
	"</div>";

var _fest_post_festival_message = "<div style='text-align: center;'>" + 
	"<p><img src='images/mvmf.jpg' alt='Miami Valley Music Fest'/></p>" + 
	"<p style='font-weight: bold;font-size:large;'>Thank you! See you next year!</p>" +
	"</div>";

// Page Configuration Options
var _fest_info = {
	page_title : "Miami Valley Music Fest",
	copyright : "&copy; 2014 <a href='http://www.miamivalleymusicfest.com/'>Miami Valley Music Fest</a>"
};

// Sharing Information
var _fest_sharing_info = {
	name : "Miami Valley Music Fest Lineup",
	url :"m.miamivalleymusicfest.com",
	description : "Mobile site with the lineup for the 2014 Miami Valley Music Fest."
};

// Festival Day Definitions
// This section allows you to set what constitutes a day of the festival. The reason this exists is so late night sets 
// can be considered part of the previous day even if they are after midnight.
// The ID is the id of the page - make sure it's a valid, unique HTML element ID
var _fest_days = 
[
	{
		name : "Friday",
		start_date : new Date(2014, 7, 1, 11, 0),
		end_date : new Date(2014, 7, 2, 4, 59),
		id : "friday"
	},
	{
		name : "Saturday",
		start_date: new Date(2014, 7, 2, 5, 0),
		end_date : new Date(2014, 7, 3, 11, 0),
		id : "saturday"
	}
];

/*

*/
function get_festival_data()
{

	// *** Woodlands
	var stage_1 = new Stage('Stage 1 - Woodlands Stage');
	
	// Friday
	var sol = new Artist('Hazy &amp; The Rugged Child', 'http://www.reverbnation.com/hazyandtheruggedchild', '');
	stage_1.add_performance(sol, new Date(2014, 7, 1, 17, 00), 60);
	
	var shrub = new Artist('Shrub', 'http://shrublove.com/', '');
	stage_1.add_performance(shrub, new Date(2014, 7, 1, 19, 30), 60);
	
	var such_a_night = new Artist('Such a Night (The Last Waltz)', 'https://www.facebook.com/TheLastWaltzLiveInDayton', '');
	stage_1.add_performance(such_a_night, new Date(2014, 7, 1, 22, 00), 120);

	
	// Saturday
	var erika_hughes = new Artist('Erika Hughes & The Well Mannered', '', '');
	stage_1.add_performance(erika_hughes, new Date(2014, 7, 2, 11, 00), 60);
	
	var terrapin_moon = new Artist('Terrapin Moon', 'http://terrapinmoon.net/', '');
	stage_1.add_performance(terrapin_moon, new Date(2014, 7, 2, 13, 00), 60);
	
	var jah_soul = new Artist('Jah Soul', 'http://www.jahsoulfamily.com', '');
	stage_1.add_performance(jah_soul, new Date(2014, 7, 2, 15, 00), 60);
	
	var salty_caramels = new Artist('The Salty Caramels', 'http://www.thesaltycaramels.net/', '');
	stage_1.add_performance(salty_caramels, new Date(2014, 7, 2, 17, 00), 60);
	
	var jones_for_revival = new Artist('Jones For Revival', 'http://www.jonesforrevival.net/', '');
	stage_1.add_performance(jones_for_revival, new Date(2014, 7, 2, 19, 15), 60);
	
	var anders_osborne = new Artist('Anders Osborne', 'http://www.andersosborne.com/', '');
	stage_1.add_performance(anders_osborne, new Date(2014, 7, 2, 21, 30), 120);

	
	// *** MVMF Stage
	var stage_2 = new Stage("Stage 2 - MVMF Stage");
	
	// Friday
	var subterranean_house_band = new Artist('Subterreanean House Band', 'https://www.facebook.com/thesubterraneanhouseband', '');
	stage_2.add_performance(subterranean_house_band, new Date(2014, 7, 1, 18, 30), 60);

	var buffalo_killers = new Artist('Buffalo Killers', 'http://www.buffalokillers.com/', '');
	stage_2.add_performance(buffalo_killers, new Date(2014, 7, 1, 20, 30), 75);

	var lost_on_iddings = new Artist('Lost on Iddings', 'http://www.lostoniddings.com/', '');
	stage_2.add_performance(lost_on_iddings, new Date(2014, 7, 2, 00, 00), 75);
	
	// Saturday
	var mystical_flutes = new Artist('Mystical Flutes and Drums', '', '');
	stage_2.add_performance(mystical_flutes, new Date(2014, 7, 2, 10, 00), 60);
	
	var chhf = new Artist('Cowboy Hillbilly Hippie Folk', 'http://www.cowboyhillbillyhippyfolk.com/', '');
	stage_2.add_performance(chhf, new Date(2014, 7, 2, 12, 00), 60);
	
	var ringers = new Artist('Trey Stone &amp; The Ringers', 'http://www.treystonemusic.com/', '');
	stage_2.add_performance(ringers, new Date(2014, 7, 2, 14, 00), 60);
	
	var boxcar_suite = new Artist('Tim Pritchard &amp; The Boxcar Suite', 'http://www.theboxcarsuite.com/', '');
	stage_2.add_performance(boxcar_suite, new Date(2014, 7, 2, 16, 00), 60);

	var mike_perkins = new Artist('Mike Perkins', 'http://www.mikeperkins.net/', '');
	stage_2.add_performance(mike_perkins, new Date(2014, 7, 2, 18, 00), 75);
	
	var glostik_willy = new Artist('Glostik Willy', 'http://www.glostikwilly.com/', '');
	stage_2.add_performance(glostik_willy, new Date(2014, 7, 2, 20, 15), 75);
	
	var spikedrivers = new Artist('Spikedrivers', 'http://www.thespikedrivers.com/', '');
	stage_2.add_performance(spikedrivers, new Date(2014, 7, 2, 23, 30), 90);
	

	// *** DCP Stage
	var stage_3 = new Stage('Stage 3 - DCP Stage');
	
	// Friday
	var hubbard_stew = new Artist('Hubbard Stew', 'http://www.hubbardstew.com/', '');
	stage_3.add_performance(hubbard_stew, new Date(2014, 7, 1, 19, 00), 60);
	
	var emily_lost_cat = new Artist('Emily and The Lost Cat Ramblers', 'http://www.reverbnation.com/emilyandthelostcatramblers', '');
	stage_3.add_performance(emily_lost_cat, new Date(2014, 7, 1, 20, 30), 60);
	
	var hieronymus_project = new Artist('The Hieronymus Project', 'http://www.reverbnation.com/thehieronymusproject', '');
	stage_3.add_performance(hieronymus_project, new Date(2014, 7, 1, 22, 00), 60);
	
	var under_the_sun = new Artist('Under The Sun', 'http://www.reverbnation.com/officialunderthesun', '');
	stage_3.add_performance(under_the_sun, new Date(2014, 7, 1, 23, 30), 60);
	
	var ashbury = new Artist('710 Ashbury', 'http://www.reverbnation.com/710ashbury', '');
	stage_3.add_performance(ashbury, new Date(2014, 7, 2, 1, 00), 60);

	// Saturday
	var nine_points_west = new Artist('Nine Points West', 'http://ninepointswest.com/', '');
	stage_3.add_performance(nine_points_west, new Date(2014, 7, 2, 11, 30), 60);
	
	var jdreads_mystiks = new Artist('Jonny Dreads and The Mystiks', 'https://www.facebook.com/JonnyDreadsAndTheMystiks', '');
	stage_3.add_performance(jdreads_mystiks, new Date(2014, 7, 2, 13, 00), 60);
	
	var resisters = new Artist('The Resisters', 'https://www.facebook.com/TheResisters', '');
	stage_3.add_performance(resisters, new Date(2014, 7, 2, 14, 30), 60);
	
	var scott_lee = new Artist('Scott Lee and the Whiskey River Boys', 'https://www.facebook.com/scottleeandthewhiskeyriverboys', '');
	stage_3.add_performance(scott_lee, new Date(2014, 7, 2, 16, 00), 60);
	
	var hurl_and_the_spins = new Artist('Hurl  &amp; The Spins', 'http://www.furpeaceranch.com/', '');
	stage_3.add_performance(hurl_and_the_spins, new Date(2014, 7, 2, 17, 30), 60);
	
	var elektrobek = new Artist('Elektrobek', '', '');
	stage_3.add_performance(elektrobek, new Date(2014, 7, 2, 19, 00), 60);
	
	var tony_herdman = new Artist('Tony Herdman Band', '', '');
	stage_3.add_performance(tony_herdman, new Date(2014, 7, 2, 20, 30), 60);
	
	var will_c_family =  new Artist('Will C and F.A.M.!.L.Y.', 'http://www.firstandmostiloveyou.com/', '');
	stage_3.add_performance(will_c_family, new Date(2014, 7, 2, 22, 00), 60);
		
	var grover = new Artist('Grover', 'http://www.groverband.com/', '');
	stage_3.add_performance(grover, new Date(2014, 7, 2, 23, 30), 60);
	
	var repeating_arms = new Artist('Repeating Arms', 'http://therepeatingarms.bandcamp.com/', '');
	stage_3.add_performance(repeating_arms, new Date(2014, 7, 3, 1, 00), 60);
	
	
	// *** Acoustic Stage
	// Friday
	var acoustic_stage = new Stage("Dart Acoustic Stage");
	
	var joe_gillis = new Artist('Joeseph Gillis', '', '');
	acoustic_stage.add_performance(joe_gillis, new Date(2014, 7, 1, 18, 30), 60);
	
	var page_bellar = new Artist('Page Bellar', 'http://www.paigebeller.com/', '');
	acoustic_stage.add_performance(page_bellar, new Date(2014, 7, 1, 20, 00), 60);
	
	var far_from_eden = new Artist('Far From Eden', 'https://www.facebook.com/farfromedenmusic', '');
	acoustic_stage.add_performance(far_from_eden, new Date(2014, 7, 1, 21, 30), 60);
	
	var gin_soaked_angels = new Artist('Gin Soaked Angels', 'https://www.facebook.com/ginsoakedangels', '');
	acoustic_stage.add_performance(gin_soaked_angels, new Date(2014, 7, 1, 23, 00), 60);	
	
	var knockin_spirits = new Artist('Knockin\' Spirits', 'https://www.facebook.com/pages/Knockin-Spirits/683611524989145', '');
	acoustic_stage.add_performance(knockin_spirits, new Date(2014, 7, 2, 00, 30), 60);
	
	// Saturday
	var phil_mineer = new Artist('Phil Mineer', 'https://soundcloud.com/phil-mineer', '');
	acoustic_stage.add_performance(phil_mineer, new Date(2014, 7, 2, 11, 45), 60);	
	
	var mark_cantwil = new Artist('Mark Cantwil', 'http://www.markcantwil.com/', '');
	acoustic_stage.add_performance(mark_cantwil, new Date(2014, 7, 2, 13, 00), 60);	
	
	var megan_o = new Artist('Megan Osman', 'http://www.megrenee.com/', '');
	acoustic_stage.add_performance(megan_o, new Date(2014, 7, 2, 14, 15), 60);	
	
	var jessie_henry = new Artist('Jessie Henry', 'http://jessehenry.com/', '');
	acoustic_stage.add_performance(jessie_henry, new Date(2014, 7, 2, 15, 30), 60);	
	
	var evan_ray = new Artist('Evan Ray', 'http://cincymusic.com/bands/evan-ray-luse', '');
	acoustic_stage.add_performance(evan_ray, new Date(2014, 7, 2, 16, 45), 75);	
	
	var sharon_lane = new Artist('Sharon Lane', '', '');
	acoustic_stage.add_performance(sharon_lane, new Date(2014, 7, 2, 18, 00), 75);	

	var stillwater_river_band = new Artist('Stillwater River Band ', 'http://www.stillwaterriverband.com/', '');
	acoustic_stage.add_performance(stillwater_river_band, new Date(2014, 7, 2, 19, 15), 60);	
	
	var cinder_home = new Artist('Cinder Home', 'http://www.reverbnation.com/cinderhome', '');
	acoustic_stage.add_performance(cinder_home, new Date(2014, 7, 2, 20, 30), 60);
	
	var festival = new Festival("Miami Valley Music Fest");
	festival.add_stage(stage_1);
	festival.add_stage(stage_2);
	festival.add_stage(stage_3);
	festival.add_stage(acoustic_stage);
	
	return festival;

}