import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Ideas } from '../../../collections/ideas.js';

import Idea from './Idea';

const PER_PAGE = 20;

class IdeaContainer extends Component {
    componentDidMount() {
        //let profileId = this.props.match.params.id;
        //this.props.dispatch(fetchItemsAndUsers(tagValues, profileId));
    }

    removeIdea(idea) {
        if (confirm('Remove this idea?')) {
            Meteor.call('ideas.removeIdea', idea);
        };
    }

    addVote(idea) {
        Meteor.call('ideas.addVote', idea);
    }

    removeVote(idea) {
        Meteor.call('ideas.removeVote', idea);
    }

    render() {
        let ideaData = this.props.ideas;
        let userId = this.props.currentUserId;

        return (
            <Idea
                ideaData={ideaData}
                removeIdea={this.removeIdea}
                addVote={this.addVote}
                removeVote={this.removeVote}
                userId={userId}
            />
        );
    }
}

export default createContainer(() => {
  Meteor.subscribe('ideas', PER_PAGE); 
  return {
      currentUser: Meteor.user(),
      currentUserId: Meteor.userId(), 
      ideas: Ideas.find({}).fetch()
  }; 
}, IdeaContainer);

IdeaContainer.propTypes = {

};

