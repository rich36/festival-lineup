var PERFORMANCE_STATUS = {
	NotStarted : 1,
	InProgress : 2,
	Completed : 3
};

var Artist = function(name, url, description)
{
	this.name = name;
	this.url = url;
	this.description = description
}

var ArtistPerformance = function(artist, start_time)
{
	this.artist = artist;
	this.start_time = start_time;
}

var Stage = function(name)
{
	this.name = name;
	this.performances = new Array();
}

Stage.prototype.add_performance = function(artist, start_time)
{
	var self = this;
	var ap = new ArtistPerformance(artist, start_time);
	self.performances.push(ap);
	console.log("I have just added a new performance " + self.performances[self.performances.length - 1].artist.name + " at " + start_time);
}

function PerformerQueryResponse()
{
	if (arguments.length == 2)
	{
		this.performance_status = arguments[0];
		this.current_performances = [1];
	}
	else
	{
		this.performance_status = PERFORMANCE_STATUS.NotStarted;
		this.current_performances = new Array();
	}
}

var Festival = function(name)
{
	this.name = name;
	this.stages = new Array();	
	
	this.add_stage = function(stage)
	{
		this.stages.push(stage);
	};
	
	this.query_performance = function(query_time)
	{
		var response = new PerformerQueryResponse();
		
		// Find the first/last dates in the collection of performances and first see if there are any
		// performances going on right now.
		var has_started = this.has_performance_started(query_time);
		if (!has_started)
		{
			response.performance_status = PERFORMANCE_STATUS.NotStarted;
			return response;
		}
		
		var has_ended = this.has_performance_ended(query_time);
		if (has_ended)
		{
			response.performance_status = PERFORMANCE_STATUS.Completed;
			return response;
		}
		
		// Get the current performers
		response.performance_status = PERFORMANCE_STATUS.InProgress
		
		
		return response;
	}
	
	this.has_performance_started = function (query_time)
	{
		if (this.stages == null) return false;
		var has_started = false;
		for(var stageIndex = 0; stageIndex < this.stages.length; stageIndex++)
		{
			var currentStage = this.stages[stageIndex];
			for(var performanceIndex = 0; performanceIndex < currentStage.performances.length; performanceIndex++)
			{
				if (currentStage.performances[performanceIndex].start_time <= query_time)
				{
					has_started = true;
				}
			}
		}
		
		return has_started;
	}
	
	this.has_performance_ended = function(query_time)
	{
		if (this.stages == null) return null;
		var has_ended = false;
		
		var last_performance_end_time;
		for(var stageIndex = 0; stageIndex < this.stages.length; stageIndex++)
		{
			var currentStage = this.stages[stageIndex];
			for(var performanceIndex = 0; performanceIndex < currentStage.performances.length; performanceIndex++)
			{
				var p = currentStage.performances[performanceIndex];
				var current_performance_end_time = p.start_time + ((60 * 1000) * p.set_duration);
				if (last_performance_end_time == null || current_performance_end_time > last_performance_end_time)
				{
					last_performance_end_time = current_performance_end_time;
				}
			}
		}
		
		if (last_performance_end_time < query_time)
		{
			has_ended = true;
		}
		return has_ended;
	}
}

