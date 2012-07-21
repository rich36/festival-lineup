/*
Configurable values
*/

function get_festival_data()
{
	// *** Charity Stage
	var charity_stage = new Stage('Charity Rocks! Stage One');
	
	// Friday
	var ldap = new Artist('The Lee Dynes Acoustic Project', '', '');
	charity_stage.add_performance(ldap, new Date(2012, 7, 10, 16, 00), 60);
	
	var dcc = new Artist('DC Connection', '', '');
	charity_stage.add_performance(dcc, new Date(2012, 7, 10, 18, 00), 60);
	
	var cmb = new Artist('Clark Manson Band', 'http://clarkmansonband.com/', '');
	charity_stage.add_performance(cmb, new Date(2012, 7, 10, 20, 00), 60);
	
	var signsol = new Artist('Signs of Life', 'http://www.signsoffloyd.com/fr_welcome.cfm', '');
	charity_stage.add_performance(signsol, new Date(2012, 7, 10, 22, 00), 60);
	
	// Saturday
	var sl = new Artist('Scott Lee', '', '');
	charity_stage.add_performance(sl, new Date(2012, 7, 11,10, 30), 60);
	
	var ahb = new Artist('The Al Holbrook Band', 'http://www.facebook.com/pages/The-Al-Holbrook-Band/268856187844', '');
	charity_stage.add_performance(ahb, new Date(2012, 7, 11,12, 00), 60);
	
	var gf = new Artist('Groovestone Fusion Band', 'http://www.reverbnation.com/groovestonefusion', '');
	charity_stage.add_performance(gf, new Date(2012, 7, 11, 14, 30), 60);
	
	var tdc = new Artist('The Demolition Crew', 'http://www.facebook.com/demolition.crew.7', '');
	charity_stage.add_performance(tdc, new Date(2012, 7, 11, 16, 30), 60);
	
	var mperk = new Artist('Mike Perkins', 'http://www.mikeperkins.net/', '');
	charity_stage.add_performance(mperk, new Date(2012, 7, 11, 18, 30), 60);
	
	var spikedrivers = new Artist('The Spikedrivers', 'http://www.thespikedrivers.com/', '');
	charity_stage.add_performance(spikedrivers, new Date(2012, 7, 11, 21, 00), 75);
	
	var hookah = new Artist('Ekoostik Hookah', 'http://www.ekoostik.com/', '');
	charity_stage.add_performance(hookah, new Date(2012, 7, 11, 23, 00), 75);
	
	// *** WYSO Stage
	var wyso_stage = new Stage("WYSO Stage");
	
	// Friday
	var nw = new Artist('Noah Wotherspoon', 'http://www.noahwotherspoon.com/', '');
	wyso_stage.add_performance(nw, new Date(2012, 7, 10, 17, 00), 60);
	
	var tp = new Artist('Terrapin Moon', 'http://terrapinmoon.net/', '');
	wyso_stage.add_performance(tp, new Date(2012, 7, 10, 19, 00), 60);
	
	var sol =  new Artist('SOL', 'http://www.facebook.com/pages/SOL/116461645078819', '');
	wyso_stage.add_performance(sol, new Date(2012, 7, 10, 21, 00), 60);
	
	var gw =  new Artist('Glostik Willy', 'http://glostikwilly.com/fr_gigs.cfm', '');
	wyso_stage.add_performance(gw, new Date(2012, 7, 11,0, 00), 60);
	
	// Saturday
	var accapella =  new Artist('Accapella Group', '', '');
	wyso_stage.add_performance(accapella, new Date(2012, 7, 11, 9, 00), 60);
	
	var swrb = new Artist('Stillwater River Band', 'https://www.facebook.com/thestillwaterriverband', '');
	wyso_stage.add_performance(swrb, new Date(2012, 7, 11, 11, 30), 60);
	
	var soulrebels = new Artist('Soul Rebels', 'http://www.reverbnation.com/soulrebelsmusic', '');
	wyso_stage.add_performance(soulrebels, new Date(2012, 7, 11, 13, 30), 60);
	
	var grover = new Artist('Grover', 'http://www.facebook.com/groverfunk', '');
	wyso_stage.add_performance(grover, new Date(2012, 7, 11, 15, 30), 60);
	
	var blue_moon_soup = new Artist('Blue Moon Soup', 'http://www.reverbnation.com/bluemoonsoup', '');
	wyso_stage.add_performance(blue_moon_soup, new Date(2012, 7, 11, 18, 30), 60);
	
	var hig_made = new Artist('Higgins-Madewell', 'http://www.higginsmadewell.com/', '');
	wyso_stage.add_performance(hig_made, new Date(2012, 7, 11, 20, 00), 60);
	
	var aliver_hall = new Artist('Aliver Hall', 'http://www.aliverhall.com/', '');
	wyso_stage.add_performance(aliver_hall, new Date(2012, 7, 11, 23, 00), 60);
	
	// *** Indoor Stage
	var indoor_stage = new Stage('Indoor Stage');
	
	// Friday
	var mc = new Artist('Marc Cantwit', '', '');
	indoor_stage.add_performance(mc, new Date(2012, 7, 10, 17, 00), 60);
	
	var btlg = new Artist('Bootleg Blues Band', 'http://www.myspace.com/bootlegbluzband', '');
	indoor_stage.add_performance(btlg, new Date(2012, 7, 10, 18, 30), 60);
	
	var elbk = new Artist('Electrobek', '', '');
	indoor_stage.add_performance(elbk, new Date(2012, 7, 10, 20, 00), 60);
	
	var nfs = new Artist('Nine False Suns', 'http://www.ninefalsesuns.com', 'Some band');
	indoor_stage.add_performance(nfs, new Date(2012, 7, 10, 21, 30), 60);
	
	var sb = new Artist('Shank Bones', 'http://www.facebook.com/ShankBones', '');
	indoor_stage.add_performance(sb, new Date(2012, 7, 10, 23, 00), 60);
	
	var hp = new Artist('Haunted Palace', 'http://www.reverbnation.com/hauntedpalace', '');
	indoor_stage.add_performance(hp, new Date(2012, 7, 11,0, 30), 90);
	
	var bmm = new Artist('Boogie Matrix Mechanism', 'http://boogiematrix.com/', 'Dancing band');
	indoor_stage.add_performance(bmm, new Date(2012, 7, 11,02, 00), 90);
	
	// Saturday
	var giggle_grass = new Artist('Giggle Grass', '', '');
	indoor_stage.add_performance(giggle_grass, new Date(2012, 7, 11, 11, 30), 60);
	
	var jah_soul = new Artist('Jah Soul', 'http://www.jahsoulfamily.com/', '');
	indoor_stage.add_performance(jah_soul, new Date(2012, 7, 11, 13, 00), 60);
	
	var paradigm_shift = new Artist('Paradigm Shift', 'http://www.facebook.com/pages/Paradijm-Shift/134930403184170', '');
	indoor_stage.add_performance(paradigm_shift, new Date(2012, 7, 11, 14, 30), 60);
	
	var city_kings = new Artist('City of Kings', 'http://cityofkings.org/the-band/', '');
	indoor_stage.add_performance(city_kings, new Date(2012, 7, 11, 16, 00), 60);
	
	var slight_reb = new Artist('Slight Rebellion', 'http://www.reverbnation.com/theslightrebellion', '');
	indoor_stage.add_performance(slight_reb, new Date(2012, 7, 11, 17, 30), 60);
	
	var m87 = new Artist('M87', 'http://www.reverbnation.com/m87music', '');
	indoor_stage.add_performance(m87, new Date(2012, 7, 11, 19, 00), 60);
	
	var tat_roots = new Artist('Tattered Roots', 'http://www.reverbnation.com/tatteredroots', '');
	indoor_stage.add_performance(tat_roots, new Date(2012, 7, 11, 20, 30), 60);
	
	var scotty_b = new Artist('Scotty Bratcher', 'http://www.scottybratcher.com/', '');
	indoor_stage.add_performance(scotty_b, new Date(2012, 7, 11, 22, 00), 60);
	
	var skeetones = new Artist('The Skeetones', 'http://www.skeetones.com/', '');
	indoor_stage.add_performance(skeetones, new Date(2012, 7, 12,02, 00), 90);
	
	// *** Acoustic Stage
	// Friday
	var acoustic_stage = new Stage("Acoustic Stage");
	
	var open_stage = new Artist('Open Stage', '', '');
	acoustic_stage.add_performance(open_stage, new Date(2012, 7, 10, 17, 00), 30);
	
	var er = new Artist('Evan Ray', 'http://www.facebook.com/evanraymusic', '');
	acoustic_stage.add_performance(er, new Date(2012, 7, 10, 17, 30), 60);
	
	var bd = new Artist('Belly Dancers', '', '');
	acoustic_stage.add_performance(bd, new Date(2012, 7, 10, 19, 00), 60);
	
	var jjw = new Artist('Jack and Joe Waters', 'http://www.myspace.com/joejackwaters', '');
	acoustic_stage.add_performance(jjw, new Date(2012, 7, 10, 20, 00), 60);
	
	var suzy = new Artist('Suzy', '', '');
	acoustic_stage.add_performance(suzy, new Date(2012, 7, 10, 19, 00), 60);
	
	// Saturday
	acoustic_stage.add_performance(open_stage, new Date(2012, 7, 11, 12, 00), 90);
	
	var megan_o = new Artist('Megan Osman', '', '');
	acoustic_stage.add_performance(megan_o, new Date(2012, 7, 11, 14, 00), 50);	
	
	var bob_h = new Artist('Bob Heffron', '', '');
	acoustic_stage.add_performance(bob_h, new Date(2012, 7, 11, 15, 00), 50);	
	
	var bret_h = new Artist('Bret Heckerman', '', '');
	acoustic_stage.add_performance(bret_h, new Date(2012, 7, 11, 16, 00), 50);	
	
	var tony_h = new Artist('Tony Herdman', 'http://www.facebook.com/tony.herdman.9', '');
	acoustic_stage.add_performance(tony_h, new Date(2012, 7, 11, 17, 00), 50);	
	
	var daniel_d = new Artist('Daniel Dye', 'http://danieldyemusic.com/', '');
	acoustic_stage.add_performance(daniel_d, new Date(2012, 7, 11, 18, 00), 50);	
	
	var kris_h = new Artist('Kris Hanson', 'http://www.reverbnation.com/krishansonsoloact', '');
	acoustic_stage.add_performance(kris_h, new Date(2012, 7, 11, 19, 00), 50);	
	
	var belly_d = new Artist('Belly Dancers', '', '');
	acoustic_stage.add_performance(belly_d, new Date(2012, 7, 11, 20, 00), 50);	

	var festival = new Festival("Miami Valley Music Fest");
	festival.add_stage(charity_stage);
	festival.add_stage(wyso_stage);
	festival.add_stage(indoor_stage);
	festival.add_stage(acoustic_stage);
	
	return festival;

}

$(document).ready(function()
{
	var festival = get_festival_data();
	
	var current_time = new Date();
	//var current_time = new Date(2012, 11, 21, 23, 59);
	//var current_time = new Date(2012, 7, 10, 20, 10);
	
	LoadNowPlaying(festival, current_time);
	
	var friday_start_date = new Date(2012, 7, 10, 11, 0);
	var friday_end_date = new Date(2012, 7, 11, 4, 59);
	LoadDayData(festival, friday_start_date, friday_end_date, $("#friday_list"), "Friday");
	
	var saturday_start_date = new Date(2012, 7, 11, 5, 0);
	var saturday_end_date = new Date(2012, 7, 12, 11, 0);
	LoadDayData(festival, saturday_start_date, saturday_end_date, $("#saturday_list"), "Saturday");
	
	$('#share_links a').each(function() {
		var url = $(this).attr('href');
		url = url.replace("__url__","www.ninefalsesuns.com/lineup");
		url = url.replace("__name__", "Miami Valley Music Fest Lineup");
		url = url.replace("__description__", "Mobile site with the lineup for the 2012 Miami Valley Music Fest.");
		$(this).attr('href', url);
	});
});

function LoadDayData(festival, start_date, end_date, $container, label)
{
	var stages = festival.load_performances_by_date(start_date, end_date);
	
	// Dynamically creating the entries for the different stages
	for(var i = 0; i < stages.length; i++)
	{
		var stage = stages[i];
		
		var h = '<div data-role="collapsible" data-collapsed="true">';
		// <h3>Stage Name</h3>
		h += "<h3>" + stage.name + "</h3>";
		h += "<ul class='performer_list'>";
		$.each(stage.performances, function(index, value) {
			h += "<li>" + FormatPerformanceNoStage(value) + "</li>";
		});
		h += "</ul>";
		
		h += "</div>"; // end container div
		$container.append(h);
	}
}

function LoadNowPlaying(festival, current_time)
{
	var response = festival.query_performance(current_time);
	
	var $outputElement = $('#nobody_playing_msg');
	if (response.performance_status == PERFORMANCE_STATUS.NotStarted)
	{
		$("#now_playing").hide();
		$outputElement.show();
		ShowNotStartedMessage($outputElement);
	}
	else if (response.performance_status == PERFORMANCE_STATUS.Completed)
	{	
		$("#now_playing").hide();
		$outputElement.show();
		ShowFinishedMessage($outputElement);
	}
	else
	{
		var $list = $("#now_playing_list");
		var list_data = "";
		$.each(response.current_performances, function(index, value) {
			list_data += "<li>" + FormatPerformance(value) + "</li>";
		});
		$list.append(list_data);
		$("#now_playing").show();
		$outputElement.hide();
	}
}

function FormatPerformance(performance)
{
	var data = "<span class='now_playing_name'>" + FormatArtistName(performance.artist) + "</span><br/>" + 
	performance.stage.name + "<br/>"  +
	FormatTimeString(performance.start_time);
	return data;
}

function FormatPerformanceNoStage(performance)
{
	var data = "<span class='now_playing_name'>" + FormatArtistName(performance.artist) + "</span><br/>" + 
	FormatTimeString(performance.start_time);
	return data;
}

function FormatTimeString(dt)
{
	var hour = dt.getHours();
	hour = hour > 12 ? hour - 12 : hour;
	hour = hour == 0 ? 12 : hour;
	return hour +':'+('0'+dt.getMinutes()).substr(-2,2) + " " + (dt.getHours() >= 12 ? "PM" : "AM");
}

function FormatArtistName(artist)
{
	if (artist.url == null || artist.url == "")
		return artist.name;
		
	return "<a href='" + artist.url + "'>" + artist.name + "</a>";
}

function ShowNotStartedMessage($element)
{
	$element.show();
	$element.html("The festival hasn't started yet!");
}

function ShowFinishedMessage($element)
{
	$element.show();
	$element.html("Thank you to everyone who attended the festival.");
}