Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer){
Meteor.publish('tasks', function(){
	return Tasks.find({userId: this.userId});
});

}

Meteor.methods ({
	addTask: function(name){
		if(!Meteor.userId()){
			throw new Meteor.Error('No Acsess!')
		}

		Tasks.insert({
				name: name,
				createdAt: new Date(),
				userId: Meteor.userId()
			});
	},
	deleteTask: function(tasksId){
		Tasks.remove(tasksId);
	}

});