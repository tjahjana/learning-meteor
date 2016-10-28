/*import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
  },
});*/

//Create new Mongo collection
Todos = new Mongo.Collection('todos');

if(Meteor.isClient) {
	Template.body.helpers ({
		todos: function() {
			return Todos.find(); //Display database record in our templates
		}
	});

}

if(Meteor.isServer) {

}
