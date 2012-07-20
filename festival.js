$(document).ready(function()
{
	var stage = new Stage('Indoor Stage');
	var nfs = new Artist('Nine False Suns', 'http://www.ninefalsesuns.com', 'Some band');
	stage.add_performance(nfs, new Date(2012, 7, 11, 21, 30));
	
	var bmm = new Artist('Boogie Matrix Mechanism', '', 'Dancing band');
	stage.add_performance(bmm, new Date(2012, 7, 11, 23, 30));
	
	var festival = new Festival("Miami Valley Music Fest");
	festival.add_stage(stage);
	
	//var current_time = new Date();
	//var current_time = new Date("December 21, 2012 12:00:00");
	var current_time = new Date(2012, 7, 11, 22, 30);
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
		$('#output').html("At the " + festival.name + "<br/>" +
		"There are " + stage.performances.length + " performance(s) at " + stage.name + "<br/>" +
		"The status is " + response.performance_status);
	}
});

function ShowNotStartedMessage($element)
{
	$element.html("The festival hasn't started yet!");
}

function ShowFinishedMessage($element)
{
	$element.html("The festival is over!");
}