import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'ideas.insert' (idea){
        return Ideas.insert({
          title: idea.title,
          description: idea.description,
          picture: idea.picture,
          owner: this.userId,
          votes: []
        })
    },

    'ideas.removeIdea' (idea) {
        if (idea.owner !== this.userId  && Meteor.user().emails[0].address !== 'admin@red.com') {
            throw new Meteor.Error('ideas.idea.removeIdea.not-authorized',
                'You are not allowed to remove ideas for other users.');
        }

        Ideas.remove(idea._id);
    },

    'ideas.addVote' (idea) {
        Ideas.update(idea._id, {
          $push: { votes: this.userId },
        });
    },

    'ideas.removeVote' (idea) {
        Ideas.update(idea._id, {
          $pull: { votes: this.userId },
        });
    }

})

export const Ideas = new Mongo.Collection('ideas');
