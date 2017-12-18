import {Mongo} from 'meteor/mongo';

Meteor.methods({
  'profiles.update' (profile) {
    return Meteor.users.update(Meteor.userId(), {
      $set: {
      name: profile.name,
      course: profile.course,
      bio: profile.bio,
      picture: profile.picture
      }
    })
    }
  })

export const Profiles = Meteor.users;