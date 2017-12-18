import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'admin.insert' (img){
        return Admin.insert({
          image: [img]
        })
    },
    'admin.remove' (img){
        return Admin.remove({
          image: [img]
        })
    }
})

export const Admin = new Mongo.Collection('admin');