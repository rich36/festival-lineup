

$(document).ready(function()
{
	var festival = get_festival_data();
	
	var current_time = new Date();
	//var current_time = new Date(2012, 11, 21, 23, 59);
	//var current_time = new Date(2012, 7, 10, 20, 10);
	
	LoadDocumentInformation($(this));
	LoadShareInformation();
	LoadNowPlaying(festival, current_time);
	
	var friday_start_date = new Date(2012, 7, 10, 11, 0);
	var friday_end_date = new Date(2012, 7, 11, 4, 59);
	LoadDayData(festival, friday_start_date, friday_end_date, $("#friday_list"), "Friday");
	
	var saturday_start_date = new Date(2012, 7, 11, 5, 0);
	var saturday_end_date = new Date(2012, 7, 12, 11, 0);
	LoadDayData(festival, saturday_start_date, saturday_end_date, $("#saturday_list"), "Saturday");
});

function LoadDocumentInformation($doc)
{
	$doc.attr("title", _fest_sharing_info.name);
	
	$('.page_title').html(_fest_info.page_title);
	
	$('.copyright').html(_fest_info.copyright);
}

function LoadShareInformation()
{
	$('#share_links a').each(function() {
		var url = $(this).attr('href');
		url = url.replace("__url__", _fest_sharing_info.url);
		url = url.replace("__name__", _fest_sharing_info.name);
		url = url.replace("__description__", _fest_sharing_info.description);
		$(this).attr('href', url);
	});
}

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
	$element.html(_fest_pre_festival_message);
}

function ShowFinishedMessage($element)
{
	$element.show();
	$element.html("Thank you to everyone who attended the festival.");
}