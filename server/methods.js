Meteor.methods({
	insertItem:function(itemDetails){
    	Stash.insert(itemDetails);
	},
	updateItem:function(itemId, itemDetails){
		Stash.upsert({_id:itemId},{$set:itemDetails});
	},
	deleteItem:function(itemId){
		var image = Stash.findOne(itemId).data.imageId;
		var manual = Stash.findOne(itemId).data.manualId;
		Data.remove(image);
		Data.remove(manual);
		Stash.remove(itemId);
	}
})