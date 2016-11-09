//Create new Mongo collection
Todos = new Mongo.Collection('todos');

Template.body.helpers ({
	todos: function() {
		//if(Session.get('hideFinished')) {
			//return Todos.find({checked: {$ne: true}});
		//} else {
			//Access database
			return Todos.find(); //Display database record in our templates
		//}
	},

	hideFinished: function() {
		return Session.get('hideFinished');
	}
});
 
Template.body.events ({
	'submit .new-task': function(event) {
		var title = event.target.title.value;

		//Add record to database
		Todos.insert ({
			title: title,
			createdAt: new Date()
		});

		//Clear form
		event.target.title.value = "";

		return false;
		//If not return false, the page will do refresh because of submit event.

	},

	'change .hide-finished': function(event) {
		Session.set('hideFinished', event.target.checked);
	}
});

//todo instead of body because it is outside body
Template.todo.events ({

	//check function
	'click .toggle-checked': function() {
		Todos.update(this._id, {$set: {checked: !this.checked}});
		//inside set is the property which we will modify -> the value of checked: flip it
	},

	//delete function
	'click .delete': function() {
		Todos.remove(this._id);
		//id automatically asigning by mongodb, which can be accessed by _id
		//this -> access to what we click
	}
});