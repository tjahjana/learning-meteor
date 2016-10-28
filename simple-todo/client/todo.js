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

if(Meteor.isClient) {
	Template.body.helpers ({
		//Type an object, with 'todos' as key and the value in []
		todos: [
			{ title: "Task #1" } //Array with single object
		]
	});

}

if(Meteor.isServer) {

}
