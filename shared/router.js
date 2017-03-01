Router.configure({
  	layoutTemplate:'stashLayout'
});


Router.route("/", function(){
    this.render('landing', {to:"main"});
});
Router.route("/register", function(){
    this.render('register', {to:"main"});
});

Router.route("/Dashboard", function(){
  	this.render('sidebar', {to:"sidenav"});
  	this.render('dashboard', {to:"main"});
});
Router.route("/New", function(){
  	this.render('sidebar', {to:"sidenav"});
	this.render('newItem', {to:"main"});
});
Router.route("/Microphone", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('microphones', {to:"main"});
});
Router.route("/Console", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('console', {to:"main"});
});
Router.route("/Monitoring", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('monitoring', {to:"main"});
});
Router.route("/Preamp", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('preamps', {to:"main"});
});
Router.route("/Outboard", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('outboard', {to:"main"});
});
Router.route("/Amp", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('amps', {to:"main"});
});
Router.route("/Expendables", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('expendables', {to:"main"});
});
Router.route("/Inuse", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('inuse', {to:"main"});
});
Router.route("/Instash", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('instash', {to:"main"});
});
Router.route("/Outofservice", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('outOfService', {to:"main"});
});
Router.route("/Wishlist", function(){
    this.render('sidebar', {to:"sidenav"});
  this.render('wishlist', {to:"main"});
});
Router.route("Edit/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('sidebar', {to:"sidenav"});
  this.render('editItem', {to:"main",
    data: function(){
        return Stash.findOne({_id:this.params._id});
      }
    });
});