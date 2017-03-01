Template.login.events({
    'click .btn-register-js':function(event){
      event.preventDefault();
      Router.go('/register');
    },
    'submit .login-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        
        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                Router.go('/Dashboard');
            } else{
              $(".login-error").animate({opacity:1, padding:"15px", width:"170px"}, 100, function(){
              $(".login-error").animate({padding:"5px", width:"160px"}, 50);
            });
            } 
        });
    }
});

Template.register.events({
    'submit .register-form': function (event) {
 
        event.preventDefault();
 
 
        var email = event.target.email.value;
        var password = event.target.password.value;
        var firstname = event.target.firstname.value;
        var lastname = event.target.lastname.value;
        var studio = event.target.studio.value;
 
        var user = {'email':email,password:password,profile:{name:firstname +" "+lastname, studio:studio}};
 
        Accounts.createUser(user,function(err){
            if(!err) {
                Router.go('/Dashboard');
            }
        });
    }
});