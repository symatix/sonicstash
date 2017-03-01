Template.newItem.events({
  'submit .insertItem':function(event){
    event.preventDefault();
    var route = event.target.category.value;
    Meteor.myFunctions.insertData();
    Router.go("/"+route);
  },
  'change #manual': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var manualValue = $("#manual_value").val();
        var noValue = "";
        if(manualValue != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("manualId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var manualData = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var manualId = fileObj._id;

            var fullPath = document.getElementById("manual").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#manual_value").val(manualData);
            $("#manual_id").val(manualId);
            Session.set("manualId", manualId);
          }
        });
     });
   },
  'change #image': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var imageValue = $("#image_value").val();
        var noValue = "";
        if(imageValue != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("imageId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var imageData = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var imageId = fileObj._id;

            var fullPath = document.getElementById("image").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#image_value").val(imageData);
            $("#image_id").val(imageId);
            Session.set("imageId", imageId);
          }
        });
     });
   }
})

Template.editItem.helpers({
  selectCategory: function(optionText){
    if(optionText === this.category){
      return 'selected'
    }
  },
  selectCondition: function(optionText){
    if(optionText === this.condition){
      return 'selected'
    }
  },
  selectAvailability: function(optionText){
    if(optionText === this.available){
      return 'selected'
    }
  },

})

Template.editItem.events({
  'submit .updateItem':function(event){
    event.preventDefault();
    Meteor.myFunctions.updateData();
    var routeItem=Stash.findOne(Session.get("itemId")).category;
    Router.go("/"+routeItem);
  },
  'click .remove':function(event){
    event.preventDefault();
    var itemId = this._id;
    Meteor.call("deleteItem", itemId);
    alert("Item deleted");
    Router.go("/")
  }
})