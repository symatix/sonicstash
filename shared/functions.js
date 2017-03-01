Meteor.myFunctions = {
  insertData: function(){
    var itemDetails = {
      //userId:Meteor.user()._id,
      createdAt: new Date(),
      //addedBy:Meteor.user().profile.full_name,
      brand:event.target.brand.value,
      model:event.target.model.value,
      category:event.target.category.value,
      available:event.target.available.value,
      serial:event.target.serial.value,
      condition:event.target.condition.value,
      notes:event.target.notes.value,
      data:{
        image:event.target.image_value.value,
        imageId:event.target.image_id.value,
        manual:event.target.manual_value.value,
        manualId:event.target.manual_id.value,
      }
    }
    Meteor.call("insertItem", itemDetails);
    alert("["+itemDetails.model+"] successfully stashed");
  },
  updateData: function(){
    var itemId = Session.get("itemId");
    var itemDetails = {
      //userId:Meteor.user()._id,
      createdAt: new Date(),
      //addedBy:Meteor.user().profile.full_name,
      brand:event.target.brand.value,
      model:event.target.model.value,
      category:event.target.category.value,
      available:event.target.available.value,
      serial:event.target.serial.value,
      condition:event.target.condition.value,
      notes:event.target.notes.value,
      data:{
        image:event.target.image_value.value,
        imageId:event.target.image_id.value,
        manual:event.target.manual_value.value,
        manualId:event.target.manual_id.value,
      }
    }
    Meteor.call("updateItem", itemId, itemDetails);
    alert("["+itemDetails.model+"] successfully updated");
  }

}