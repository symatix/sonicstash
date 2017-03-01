Stash = new Mongo.Collection("stash");

Data = new FS.Collection("data", {
  stores: [new FS.Store.FileSystem("data", {path: Meteor.absolutePath + '/data'})]
});