import React from 'react';
import PropTypes from 'prop-types';
import {createContainer} from 'meteor/react-meteor-data';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Ideas} from '../../../collections/ideas';

import './styles.css';

const styles = {
    header: {
        fontSize: '1rem',
    },
    description: {
        fontSize: '1rem',
    },
    button: {
        margin: '0 0.5rem 0 0.5rem',
    }
};

const IdeaCard = ({idea, removeIdea, addVote, removeVote, userId}) => {


    let email = Meteor.user() ? Meteor.user().emails[0].address : "" ;
 
    let titleColor = "red";
    let updateVote = addVote;
    let buttonLabel = "Vote";
    let voted = false;
    let loggedIn = false;

    if (idea.votes.find((vote) => vote === userId)) {
        updateVote = removeVote;
        buttonLabel = "UnVote";
        voted = true;
    }

    if (userId !== null) {
        if (userId.length > 0) {
            loggedIn = true;
        }
    }

    const background = {
        backgroundImage: 'url('+ idea.picture + ')',
    }

    return (
        <Card className="ideaCard">
            <CardMedia className="ideaImage">
            <div className = "ideaCardImage"  style={background}>

            </div>

            </CardMedia>
            <div className = "singleIdeaTitle">
            <CardHeader
                title={idea.title}
                titleColor={titleColor}
                titleStyle={styles.header}
            />
            </div>
            <CardText style={styles.description}>
                {idea.description}
            </CardText>
            <CardText className="voteCount" style={styles.description}>
                Vote Count: <span>{idea.votes.length}</span>
            </CardText>
            
            <CardActions>
                <div className="voteButton">
                    <RaisedButton
                        label={buttonLabel}
                        onClick={updateVote}
                        backgroundColor={voted ? '#000000' : '#e1231a'}
                        labelColor='#ffffff'
                        style={styles.button}
                        disabled={loggedIn ? false : true}
                    />
                    {idea.owner === userId || email === 'admin@red.com' ? 
                        <RaisedButton
                            label='Remove'
                            onClick={removeIdea}
                            backgroundColor='#757575'
                            labelColor='#ffffff'
                            style={styles.button}
                            disabled={loggedIn ? false : true}
                        />
                    : ''}
                </div>
            </CardActions>
        </Card>
    );
}

IdeaCard.propTypes = {

};

export default IdeaCard;
