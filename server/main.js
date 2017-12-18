import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Ideas } from '../imports/collections/ideas';
import { Profiles } from '../imports/collections/profiles';
import { Admin } from '../imports/collections/admin'; 

Meteor.startup(() => {
  Meteor.publish('ideas', function() {
    return Ideas.find({});
  })
  Meteor.publish("users", function () {
      return Meteor.users.find({});
  });
  Meteor.publish('user', function() {
    return Profiles.find(this.userId);

  })
  Meteor.publish("usersAndIdeas", function () {
    return [
      Profiles.find({}),
      Ideas.find({})
    ];
  });
  Meteor.publish('admin', function(){
    return Admin.find({})
  })
});



// Meteor.startup(() => {
//   let user = {};
//   let user1 = {};
//   let user2 = {};
//   let user3 = {};
//   let user4 = {};


//   if( Meteor.users.find().count() === 0 ) {
//     user = Accounts.createUser({
//       email: 'caramelle@elle.com',
//       password: '123456',
//       profile: {
//         name: 'Commissioner Gordon',
//         course: '035-0365-035-30',
//         bio: "I like reading",
//         picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
        
//       }

      
//     });
//     user1 = Accounts.createUser({
//       email: 'batman@example.com',
//       password: '123456',
//       profile: {
//         name: 'Bat Man',
//         course: '035-0365-035-30',
//         bio: "I like cats",
//         picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
//       }

//     });
//     user2 = Accounts.createUser({
//       email: 'crablady@example.com',
//       password: '123456',
//       profile: {
//         name: 'Crab Lady',
//         course: '035-0365-035-30',
//         bio: "I like music",
//         picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
//       }

//     });
//     user3 = Accounts.createUser({
//       email: 'totoro@example.com',
//       password: '123456',
//       profile: {
//         name: 'Totoro',
//         course: '035-0365-035-30',
//         bio: "I like icecreamg",
//         picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
//       }

//     });
//   }


// });






//   Meteor.publish('sharedBins', function() {
//     const user = Meteor.users.findOne(this.userId); //returns us the USER object
//     //this publication pulls the users email and will allow us to see which bins are available to us to view
//     if (!user) {
//       //if there isnt a user then just return out of the fucntion
//       returns;
//     }
//     const email = user.emails[0].address; //a user in meteor can have multiple email address, email is an array that all the emails are registered to the account

//     return Bins.find({
//       sharedWith: { $elemMatch: { $eq: email } } //Walk through an array and find an element that equals (eq) to the variable email
//     });
//   });
// });


// //Only executed on the server
// import { Meteor } from 'meteor/meteor';
// import { Users } from '../imports/collections/users';
// import { Ideas } from '../imports/collections/ideas';
// import _ from 'lodash';
// import { image, helpers, lorem, commerce } from 'faker';

// Meteor.startup(() => {
//   //Generate Data, but also check to see if data exists first
//   //See if collection has any records
//   const numberRecords = Users.find({}).count();
//   if (!numberRecords) {
//     _.times(10, () => {
//       //Runs this code 10 times
//       const { name, course, avatar, description } = helpers.createCard(); //generates a full profile from faker library

//       Users.insert({
//         //Saves data to mongodb using Meteor
//         name: name,
//         course: commerce.department(),
//         avatar: image.avatar(), //generates an img url
//         bio: lorem.sentence()
//       });
//     });
//   }

//   Meteor.publish('users', function(per_page) {
//     //first argument is the publications name, arbitrary name to which we will subscribe to on the client side
//     return Users.find({}, { limit: per_page }); //Cursor which means it doesnt execute a query right away, its more of a
//     //bookmark that runs only if you tell it to through a publication
//   });
// });