import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
});

/*
import { Tasks } from '../imports/api/tasks.js';

    Meteor.startup(function(){
      if(Tasks.find().count() == 0){
        Tasks.insert({serverInsert:"test from server"},function(err,result){
         if(!err){
          console.log("insert succefull")
        }
     })
    }
  })
*/
