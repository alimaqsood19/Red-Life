import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Profiles } from '../../../collections/profiles';
import { Ideas } from '../../../collections/ideas';

import Profile from './Profile';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';




class ProfileContainer extends Component {

  render() {



      let usersData = this.props.profiles;
      let ideasData = this.props.ideas.length > 0 ? this.props.ideas : [];
      let userid = this.props.match.params.userid;
      let loginUserId = this.props.currentUserId;
      let ideas = this.props.ideas;

                  //MAPS THROUGH IDEAS DATA TO RETURN NEW ARRAY OF VOTES
                  //JOINS ALL VOTES INTO ONE ARRAY WITH ALL IDS THAT VOTED
                  //COUNTS HOW MANY TIMES THE USER ID APPEARS IN THE ARRAY
                  var voteData = ideasData.map(function(idea) {
                    return idea.votes;
                  }).reduce(function(a, b) {
                    return a.concat(b);
                  }, []);
                  var userVote = 0;
                  for(var i = 0; i < voteData.length; ++i){
                      if(voteData[i] == userid)
                      userVote++;
                  }

                    var profileIdeaCount = ideasData.filter(function(idea){
                      return(
                        idea.owner === loginUserId
                      );
                    }).map(function(idea){
                      return idea.title;
                    });
   

                    // var profileIdea = ideasData.map(function(idea){
                    //   return(
                    //     idea.owner && idea.description
                    //   );
                    // })
                    // console.log(profileIdea);

                    let profileData = usersData.filter((user) => {
                      return (
                        userid === user._id
                      );
                    })

      return (
          <Profile
            profileData={profileData}
            userVote={userVote}
            loginUserId={loginUserId}
            ideas = {ideas}

        />

      );
  }
}



export default createContainer(() => {
  Meteor.subscribe('usersAndIdeas');
  return {
      currentUser: Meteor.user(),
      currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
      profiles: Profiles.find({}).fetch(),
      ideas: Ideas.find({}).fetch()
  };
}, ProfileContainer);
