import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.sidebar.events({
  'click #menu-toggle':function(event) {
        event.preventDefault();
        $("#wrapper").toggleClass("toggled");
  },
});
