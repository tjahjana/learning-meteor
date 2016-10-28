//Create new Mongo collection
Todos = new Mongo.Collection('todos');

Template.body.helpers ({
	todos: function() {
		return Todos.find(); //Display database record in our templates
	}
});