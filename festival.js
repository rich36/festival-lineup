function get_festival_data()
{
	// *** Charity Stage
	var charity_stage = new Stage('Charity Rocks! Stage One');
	
	// Friday
	var ldap = new Artist('The Lee Dynes Acoustic Project', '', '');
	charity_stage.add_performance(ldap, new Date(2012, 7, 10, 16, 00), 60);
	
	var dcc = new Artist('DC Connection', '', '');
	charity_stage.add_performance(dcc, new Date(2012, 7, 10, 18, 00), 60);
	
	var cmb = new Artist('Clark Manson Band', '', '');
	charity_stage.add_performance(cmb, new Date(2012, 7, 10, 20, 00), 60);
	
	var signsol = new Artist('Signs of Life', '', '');
	charity_stage.add_performance(signsol, new Date(2012, 7, 10, 22, 00), 60);
	
	// Saturday
	var sl = new Artist('Scott Lee', '', '');
	charity_stage.add_performance(sl, new Date(2012, 7, 11,10, 30), 60);
	
	var ahb = new Artist('The Al Holbrook Band', '', '');
	charity_stage.add_performance(ahb, new Date(2012, 7, 11,12, 00), 60);
	
	var gf = new Artist('Groovestone Fusion Band', '', '');
	charity_stage.add_performance(gf, new Date(2012, 7, 11, 14, 30), 60);
	
	var tdc = new Artist('The Demolition Crew', '', '');
	charity_stage.add_performance(tdc, new Date(2012, 7, 11, 16, 30), 60);
	
	var mperk = new Artist('Mike Perkins', '', '');
	charity_stage.add_performance(mperk, new Date(2012, 7, 11, 18, 30), 60);
	
	// *** WYSO Stage
	var wyso_stage = new Stage("WYSO Stage");
	
	var nw = new Artist('Noah Wotherspoon', '', '');
	wyso_stage.add_performance(nw, new Date(2012, 7, 10, 17, 00), 60);
	
	var tp = new Artist('Terrapin Moon', '', '');
	wyso_stage.add_performance(tp, new Date(2012, 7, 10, 19, 00), 60);
	
	var sol =  new Artist('SOL', '', '');
	wyso_stage.add_performance(sol, new Date(2012, 7, 10, 21, 00), 60);
	
	var sol =  new Artist('Glostik Willy', '', '');
	wyso_stage.add_performance(sol, new Date(2012, 7, 11,0, 00), 60);
	
	// *** Indoor Stage
	var indoor_stage = new Stage('Indoor Stage');
	
	// Friday
	var mc = new Artist('Marc Cantwit', '', '');
	indoor_stage.add_performance(mc, new Date(2012, 7, 10, 17, 00), 60);
	
	var btlg = new Artist('Bootleg', '', '');
	indoor_stage.add_performance(btlg, new Date(2012, 7, 10, 18, 30), 60);
	
	var elbk = new Artist('Electrobek', '', '');
	indoor_stage.add_performance(elbk, new Date(2012, 7, 10, 20, 00), 60);
	
	var nfs = new Artist('Nine False Suns', 'http://www.ninefalsesuns.com', 'Some band');
	indoor_stage.add_performance(nfs, new Date(2012, 7, 10, 21, 30), 60);
	
	var sb = new Artist('Shank Bones', '', '');
	indoor_stage.add_performance(sb, new Date(2012, 7, 10, 23, 00), 60);
	
	var hp = new Artist('Haunted Palace', '', '');
	indoor_stage.add_performance(hp, new Date(2012, 7, 11,0, 30), 90);
	
	var bmm = new Artist('Boogie Matrix Mechanism', '', 'Dancing band');
	indoor_stage.add_performance(bmm, new Date(2012, 7, 11,02, 00), 90);
	
	// *** Acoustic Stage
	var acoustic_stage = new Stage("Acoustic Stage");
	
	var open_stage = new Artist('Open Stage', '', '');
	acoustic_stage.add_performance(open_stage, new Date(2012, 7, 10, 17, 00), 30);
	
	var er = new Artist('Evan Ray', '', '');
	acoustic_stage.add_performance(er, new Date(2012, 7, 10, 17, 30), 60);
	
	var bd = new Artist('Belly Dancers', '', '');
	acoustic_stage.add_performance(bd, new Date(2012, 7, 10, 19, 00), 60);
	
	var jjw = new Artist('Jack and Joe Waters', '', '');
	acoustic_stage.add_performance(jjw, new Date(2012, 7, 10, 20, 00), 60);
	
	var suzy = new Artist('Suzy', '', '');
	acoustic_stage.add_performance(suzy, new Date(2012, 7, 10, 19, 00), 60);
	
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
	
	//var current_time = new Date();
	//var current_time = new Date("December 21, 2012 12:00:00");
	var current_time = new Date(2012, 7, 10, 20, 10);
	
	LoadNowPlaying(festival, current_time);
	
	var friday_start_date = new Date(2012, 7, 10, 11,0);
	var friday_end_date = new Date(2012, 7, 11,4, 59);
	LoadDayData(festival, friday_start_date, friday_end_date, $("#friday_list"), "Friday");
	
	var saturday_start_date = new Date(2012, 7, 11,5, 0);
	var saturday_end_date = new Date(2012, 7, 12,11,0);
	LoadDayData(festival, saturday_start_date, saturday_end_date, $("#saturday_list"), "Saturday");
	
});

function LoadDayData(festival, start_date, end_date, $container, label)
{
	var stages = festival.load_performances_by_date(start_date, end_date);
	
	/*
	 <div  data-role="collapsible" data-collapsed="false">
		<h3>
			Charity Rocks! Stage One
		</h3>
		<div class="ui-grid-a">
			<ul class='performer_list'>			
		<li><span class="now_playing_name">Clark Manson Band</span><br>Charity Rocks! Stage One<br>8:00 PM</li><li><span class="now_playing_name">Electrobek</span><br>Indoor Stage<br>8:00 PM</li><li><span class="now_playing_name">Jack and Joe Waters</span><br>Acoustic Stage<br>8:00 PM</li></ul>
		</div>
	</div>
	*/
	for(var i = 0; i < stages.length; i++)
	{
		var stage = stages[i];
		
		var h = '<div data-role="collapsible" data-collapsed="true">';
		// <h3>Stage Name</h3>
		h += "<h3>" + stage.name + "</h3>";
		
		h += '<div class="ui-grid-a">'; // Start text container
	
		h += "<ul class='performer_list'>";
		$.each(stage.performances, function(index, value) {
			h += "<li>" + FormatPerformanceNoStage(value) + "</li>";
		});
		h += "</ul>";
		
		h += "</div>"; // End text container
		h += "</div>"; // end contaier div
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
		//$('#output').html($list.html());
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
	$element.html("The festival is over!");
}