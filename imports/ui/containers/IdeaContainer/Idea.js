import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import IdeaCardList from '../../components/IdeaCardList';

const Idea = ({ideaData, removeIdea, addVote, removeVote, userId}) => {
    return (
        <div className="appContent">
            <div className="appIdeas">
                <IdeaCardList
                    ideaData={ideaData}
                    removeIdea={removeIdea}
                    addVote={addVote}
                    removeVote={removeVote}
                    userId={userId}
                />
            </div>
        </div>
    );
}

Idea.propTypes = {

};

export default Idea;
