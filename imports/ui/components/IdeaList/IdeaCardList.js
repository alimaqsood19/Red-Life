import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import IdeaCard from '../IdeaCard';

const IdeaCardList = ({ideaData}) => (
    <div className="ideaCardList">
        {ideaData.map(item =>
            <IdeaCard key={idea.id} idea={idea} />
        )}
    </div>
);

IdeaCardList.propTypes = {

};

export default IdeaCardList;
