import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import UsersCardList from '../../components/UsersCardList';

const Users = ({profileData}) => {
    return (
        <div className="appProfileContent">

                <div className="appProfile">
                    <UsersCardList profileData={profileData} />
                </div>
 
        </div>
    );
}

export default Users;
