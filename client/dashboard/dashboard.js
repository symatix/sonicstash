Template.dashboard.helpers({
	micT:function(){
		return Stash.find({category:"Microphone", available:{$ne:"Wishlist"}}).fetch().length;
	},
	micS:function(){
		return Stash.find({category:"Microphone", avaliable:"In stash"}).fetch().length;
	},
	micU:function(){
		return Stash.find({category:"Microphone", available:"In use"}).fetch().length
	},
	micB:function(){
		return Stash.find({category:"Microphone", condition:"Out of service"}).fetch().length
	},
	micW:function(){
		return Stash.find({category:"Microphone", available:"Wishlist"}).fetch().length
	},
	consoleT:function(){
		return Stash.find({category:"Console", available:{$ne:"Wishlist"}}).fetch().length;
	},
	consoleS:function(){
		return Stash.find({category:"Console", avaliable:"In stash"}).fetch().length;
	},
	consoleU:function(){
		return Stash.find({category:"Console", available:"In use"}).fetch().length
	},
	consoleB:function(){
		return Stash.find({category:"Console", condition:"Out of service"}).fetch().length
	},
	consoleW:function(){
		return Stash.find({category:"Console", available:"Wishlist"}).fetch().length
	},
	monitoringT:function(){
		return Stash.find({category:"Monitoring", available:{$ne:"Wishlist"}}).fetch().length;
	},
	monitoringS:function(){
		return Stash.find({category:"Monitoring", avaliable:"In stash"}).fetch().length;
	},
	monitoringU:function(){
		return Stash.find({category:"Monitoring", available:"In use"}).fetch().length
	},
	monitoringB:function(){
		return Stash.find({category:"Monitoring", condition:"Out of service"}).fetch().length
	},
	monitoringW:function(){
		return Stash.find({category:"Monitoring", available:"Wishlist"}).fetch().length
	},
	outboardT:function(){
		return Stash.find({category:"Outboard", available:{$ne:"Wishlist"}}).fetch().length;
	},
	outboardS:function(){
		return Stash.find({category:"Outboard", avaliable:"In stash"}).fetch().length;
	},
	outboardU:function(){
		return Stash.find({category:"Outboard", available:"In use"}).fetch().length
	},
	outboardB:function(){
		return Stash.find({category:"Outboard", condition:"Out of service"}).fetch().length
	},
	outboardW:function(){
		return Stash.find({category:"Outboard", available:"Wishlist"}).fetch().length
	},
	preampsT:function(){
		return Stash.find({category:"PreAmp", available:{$ne:"Wishlist"}}).fetch().length;
	},
	preampsS:function(){
		return Stash.find({category:"PreAmp", avaliable:"In stash"}).fetch().length;
	},
	preampsU:function(){
		return Stash.find({category:"PreAmp", available:"In use"}).fetch().length
	},
	preampsB:function(){
		return Stash.find({category:"PreAmp", condition:"Out of service"}).fetch().length
	},
	preampsW:function(){
		return Stash.find({category:"PreAmp", available:"Wishlist"}).fetch().length
	},
	ampsT:function(){
		return Stash.find({category:"Amp", available:{$ne:"Wishlist"}}).fetch().length;
	},
	ampsS:function(){
		return Stash.find({category:"Amp", avaliable:"In stash"}).fetch().length;
	},
	ampsU:function(){
		return Stash.find({category:"Amp", available:"In use"}).fetch().length
	},
	ampsB:function(){
		return Stash.find({category:"Amp", condition:"Out of service"}).fetch().length
	},
	ampsW:function(){
		return Stash.find({category:"Amp", available:"Wishlist"}).fetch().length
	},
	expendablesT:function(){
		return Stash.find({category:"Expendables", available:{$ne:"Wishlist"}}).fetch().length;
	},
	expendablesS:function(){
		return Stash.find({category:"Expendables", avaliable:"In stash"}).fetch().length;
	},
	expendablesU:function(){
		return Stash.find({category:"Expendables", available:"In use"}).fetch().length
	},
	expendablesB:function(){
		return Stash.find({category:"Expendables", condition:"Out of service"}).fetch().length
	},
	expendablesW:function(){
		return Stash.find({category:"Expendables", available:"Wishlist"}).fetch().length
	},
	overviewT:function(){
		return Stash.find({available:{$ne:"Wishlist"}}).fetch().length;
	},
	overviewS:function(){
		return Stash.find({avaliable:"In stash"}).fetch().length;
	},
	overviewU:function(){
		return Stash.find({available:"In use"}).fetch().length
	},
	overviewB:function(){
		return Stash.find({condition:"Out of service", available:{$ne:"Wishlist"}}).fetch().length
	},
	overviewW:function(){
		return Stash.find({available:"Wishlist"}).fetch().length
	},
})