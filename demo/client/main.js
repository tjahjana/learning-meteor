Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient){
	Meteor.subscribe('tasks');

	Template.tasks.helpers({
		tasks: function(){
			return Tasks.find({}, {sort: {createdt: -1}});
		}
	});

	Template.tasks.events({
		"submit .add-task": function(event) {
			var name = event.target.name.value;
			//console.log(name);
			Meteor.call('addTask', name);
		
			

			event.target.name.value = '';
			
			return false;
		},
		"click .delete-task": function(event){
			if(confirm('Delete Tasks')){
				Meteor.call('deleteTask', this._id);
		}
		return false;
	}
	});

}

