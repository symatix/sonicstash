// set active class depending on url path
Template.registerHelper('navClassName', function (page) {
  if (Router.current()) {
    return Router.current().route.getName() === page ? "active" : "";
  }
});
Template.sidebar.events({
	'click .btn-logout': function(event){
        event.preventDefault();
        Meteor.logout();
		Router.go('/');
	}
})