Template.instash.helpers({
	stashed:function(){
		return Stash.find({available:"In stash", condition:"Working"});
	}
})

Template.instash.events({
  	'click .remove':function(event){
	    event.preventDefault();
	    var itemId = this._id;
	    Meteor.call("deleteItem", itemId);
	    alert("Item deleted");
	},
	'click .btn-edit-js':function(event){
		event.preventDefault();
		var id = this._id;
		Router.go("/edit/"+id);
	},
	'click .btn-notes':function(event){
    	var itemId = this._id;
    	var notes = Stash.findOne(itemId).notes;
    	$(".notes-dialog").text(notes);
	},
  	'click #notes-modal':function(event){
    	$('#notes-modal').modal('hide');
  	},
  	'click .image-modal-trigger':function(){
    	var itemId = this._id;
    	var img = Stash.findOne(itemId).data.image;
    	$(".image-modal-src").attr('src',img);
  	},
  	'click #image-modal':function(event){
    	$('#image-modal').modal('hide');
    }
})