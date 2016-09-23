$(document).ready(function(){
	var container = $('.container');
	var box = $('.box');
	var buddy = $('.buddy');
	var pop = $('.pop');
	var open = $('.btn');
	var close = $('.close');
	var imgs = pop.find('img');

	$.Velocity.RegisterEffect('wyj.slideUpIn',{
		defaultDuration:500,
		calls:[
			[{opacity:[1,0],translateY:[0,100]}]
		]
	});
	$.Velocity.RegisterEffect('wyj.slideOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],translateY:[100,0]}]
		]
	});
	$.Velocity.RegisterEffect('wyj.scaleIn',{
		defaultDuration:300,
		calls:[
			[{opacity:[1,0],scale:[1,0.3]}]
		]
	});	
	$.Velocity.RegisterEffect('wyj.scaleOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],scale:[0.3,1]}]
		]
	});
	var seqInit = [{
		elements:container,
		properties:'wyj.slideUpIn',
		options:{delay:300}
	},{
		elements:box,
		properties:'wyj.slideUpIn',
		options:{sequenceQueue:false}
	},{
		elements:buddy,
		properties:'wyj.slideUpIn',
		options:{sequenceQueue:false,
				delay:60}
	}];
	var seqClick = [{
		elements:container,
		properties:'wyj.slideOut',
		options:{}
	},{
		elements:box,
		properties:'wyj.slideOut',
		options:{sequenceQueue:false}
	},{
		elements:container,
		properties:'wyj.slideUpIn',
	},{
		elements:pop,
		properties:'wyj.slideUpIn',
		options:{sequenceQueue:false}
	},{
		elements:imgs,
		properties:'wyj.scaleIn',
	}];
	var seqClose = [{
		elements:imgs,
		properties:'wyj.scaleOut',
	},{
		elements:container,
		properties:'wyj.slideOut',
		options:{}
	},{
		elements:pop,
		properties:'wyj.slideOut',
		options:{sequenceQueue:false}
	},{
		elements:container,
		properties:'wyj.slideUpIn',
	},{
		elements:box,
		properties:'wyj.slideUpIn',
		options:{sequenceQueue:false}
	}];
	$.Velocity.RunSequence(seqInit);
	open.on('click',function(){
		$.Velocity.RunSequence(seqClick);
	})
	close.on('click',function(){
		$.Velocity.RunSequence(seqClose);
	})
});
