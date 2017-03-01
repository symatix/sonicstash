Template.alerts.helpers({
	micB:function(){
		var item = Stash.find({category:"Microphone", condition:"Out of service"}).fetch().length;
		if(item==0){
			return false;
		} else {
			return true;
		}
	},
	consoleB:function(){
		var item = Stash.find({category:"Console", condition:"Out of service"}).fetch().length;
		if(item==0){
			return false;
		} else {
			return true;
		}
	},
	monitoringB:function(){
		var item = Stash.find({category:"Monitoring", condition:"Out of service"}).fetch().length;
		if(item==0){
			return false;
		} else {
			return true;
		}
	},
	preampB:function(){
		var item = Stash.find({category:"PreAmp", condition:"Out of service"}).fetch().length;
		if(item==0){
			return false;
		} else {
			return true;
		}
	},
	outboardB:function(){
		var item = Stash.find({category:"Outboard", condition:"Out of service"}).fetch().length;
		if(item==0){
			return false;
		} else {
			return true;
		}
	},
	ampB:function(){
		var item = Stash.find({category:"Amp", condition:"Out of service"}).fetch().length;
		if(item==0){
			return false;
		} else {
			return true;
		}
	},
	expendableB:function(){
		var item = Stash.find({category:"Expendables", condition:"Out of service"}).fetch().length;
		if(item==0){
			return false;
		} else {
			return true;
		}
	},
	allOK:function(){
		var item = Stash.find({condition:"Out of service"}).fetch().length;
		if(item==0){
			return true;
		} else {
			return false;
		}
	}
})