

$(document).ready(function()
{
	$( document ).bind( "pagechange", function( event, data ){
		LoadNowPlaying(festival, _fest_timing.current_time);
	});

	var festival = get_festival_data();

	LoadNowPlaying(festival, _fest_timing.current_time);
	LoadDays(festival);
	LoadShareInformation();
	
	// Set this information last so that dynamic elements can get updated too
	LoadDocumentInformation($(this));
	
	window.setInterval(function() 
	{
		_fest_timing.current_time.setMilliseconds(_fest_timing.current_time.getMilliseconds() + _fest_timing.refresh_interval); 
		LoadNowPlaying(festival, _fest_timing.current_time);
	}, _fest_timing.refresh_interval);
});

function LoadDays(festival)
{
	// Template for the list item that links to the day page
	$.template( "lineup_list_item_template", 
		"<li data-theme='a'><a href='#${id}' data-transition='slide'>${name}</a></li>" );
	
	// Template for the day page.
	var page_template = "<div data-role='page' id='${id}'>" + // Open Page
		"<div data-role='header'><h1 class='page_title'>Lineup</h1></div>" +
		"<div data-role='content'>" + // Start Content
		"<h2>${name}</h2>" +
		"<div id='${id}_list' data-role='collapsible-set' data-theme='' data-content-theme=''></div>" +
		"<p><a href='#home' data-direction='reverse' data-role='button' data-theme='b'>Back to home</a></p>	" +
		"</div>" + // End Content
		"<div data-role='footer'><h4 class='copyright'>&nbsp;</h4>" + // Start Footer
		"<p class='footer_tagline'>Site by Rich of <a href='http://www.ninefalsesuns.com'>Nine False Suns</a></p>" +
		"</div>" + // End Footer
		"</div>"; // Close Page
	$.template("lineup_day_template", page_template);
	
	var last_element_id = "home";
	for(var i = 0; i < _fest_days.length; i++)
	{
		var item = _fest_days[i];
		$.tmpl("lineup_list_item_template", item).appendTo("#lineup_days_list");
		$.tmpl("lineup_day_template", item).insertAfter("#" + last_element_id);
		LoadDayData(festival, item.start_date, item.end_date, $("#" + item.id + "_list"), item.name);
		last_element_id = item.id;
	}
	
	$("#lineup_days_list").listview('refresh');
}

function LoadDayData(festival, start_date, end_date, $container, label)
{
	var stages = festival.load_performances_by_date(start_date, end_date);
	
	// Dynamically creating the entries for the different stages
	for(var i = 0; i < stages.length; i++)
	{
		var stage = stages[i];
		
		var h = '<div data-role="collapsible" data-collapsed="true">';
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

function LoadDocumentInformation($doc)
{
	$doc.attr("title", _fest_sharing_info.name);
	
	$('.page_title').html(_fest_info.page_title);
	
	$('.copyright').html(_fest_info.copyright);
	
	$('#no_acts_currently_playing').text(_fest_messages.no_one_currently_playing);
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
		$list.empty();
		
		if (response.current_performances.length > 0)
		{
			var list_data = "";
			$.each(response.current_performances, function(index, value) {
				list_data += "<li>" + FormatPerformance(value) + "</li>";
			});
			$list.append(list_data);
			$list.show();
			$('#no_acts_currently_playing').hide();
		}
		else
		{
			$('#no_acts_currently_playing').show();
			$list.hide();
		}
		
		$("#now_playing").show();
		$outputElement.hide();
		
		$('#current_time').html(FormatTimeString(_fest_timing.current_time)); 
		//$('#current_time').html(_fest_timing.current_time.toString()); // Good for debugging because it shows seconds
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
	$element.html(_fest_messages.pre_festival_message);
}

function ShowFinishedMessage($element)
{
	$element.show();
	$element.html(_fest_messages.post_festival_message);
}