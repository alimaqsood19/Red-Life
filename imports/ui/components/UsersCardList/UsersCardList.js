import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './styles.css';

import UserCard from '../UserCard';

const UsersCardList = ({profileData}) => {

    const styles = {
        header: {
            color: '#e1231a',
            textAlign: 'center',
            fontSize:'2em',
        }
    };

    return (
<div className="userCardList">

        <div className="usersHeader">
        <Card className="usersHeaderCard">
            <CardTitle
                style={{backgroundColor: '#F5F5F5'}}
                titleStyle={styles.header}
                title="MEET YOUR TEAM"

            />
        </Card>
    </div>

    <div className="profileCardList">
        {profileData.map(user =>
            <UserCard key={user._id} user={user} />
        )}
    </div>
</div>
)};

export default UsersCardList;
