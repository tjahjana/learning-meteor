//Create new Mongo collection
Todos = new Mongo.Collection('todos');

Template.body.helpers ({
	todos: function() {
		//Access database
		return Todos.find(); //Display database record in our templates
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

	}
});