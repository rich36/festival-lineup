function get_festival_data()
{
	var indoor_stage = new Stage('Indoor Stage');
	var nfs = new Artist('Nine False Suns', 'http://www.ninefalsesuns.com', 'Some band');
	indoor_stage.add_performance(nfs, new Date(2012, 7, 11, 21, 30), 60);
	var sb = new Artist('Shank Bones', '', '');
	indoor_stage.add_performance(sb, new Date(2012, 7, 11, 23, 00), 60);
	
	var bmm = new Artist('Boogie Matrix Mechanism', '', 'Dancing band');
	indoor_stage.add_performance(bmm, new Date(2012, 7, 11, 23, 30), 90);
	
	var wyso_stage = new Stage("WYSO Stage");
	var sol =  new Artist('SOL', '', '');
	wyso_stage.add_performance(sol, new Date(2012, 7, 11, 21, 00), 60);
	
	var festival = new Festival("Miami Valley Music Fest");
	festival.add_stage(indoor_stage);
	festival.add_stage(wyso_stage);

	
	return festival;

}



$(document).ready(function()
{
	
	var festival = get_festival_data();
	
	//var current_time = new Date();
	//var current_time = new Date("December 21, 2012 12:00:00");
	var current_time = new Date(2012, 7, 11, 21, 40);
	var response = festival.query_performance(current_time);
	
	var $outputElement = $('#output');
	if (response.performance_status == PERFORMANCE_STATUS.NotStarted)
	{
		ShowNotStartedMessage($outputElement);
	}
	else if (response.performance_status == PERFORMANCE_STATUS.Completed)
	{
		ShowFinishedMessage($outputElement);
	}
	else
	{
		var $list = $("<ul/>").attr('id', 'current_performances');
		var list_data = "";
		$.each(response.current_performances, function(index, value) {
			list_data += "<li>" + FormatPerformance(value) + "</li>";
		});
		$list.append(list_data);
		/*
		$('#output').html("At the " + festival.name + "<br/>" +
		"There are " + response.current_performances.length + " performance(s) at " + stage.name + "<br/>" +
		"The status is " + response.performance_status + "<br/>" 
		+ $list.html());
		*/
		
		$('#output').html($list.html());
		
		
	}
});

function FormatPerformance(performance)
{
	var data = FormatArtistName(performance.artist) + "<br/>" + 
	performance.stage.name + "<br/>"  +
	performance.start_time;
	return data;
}

function FormatArtistName(artist)
{
	if (artist.url == null || artist.url == "")
		return artist.name;
		
	return "<a href='" + artist.url + "'>" + artist.name + "</a>";
}

function ShowNotStartedMessage($element)
{
	$element.html("The festival hasn't started yet!");
}

function ShowFinishedMessage($element)
{
	$element.html("The festival is over!");
}