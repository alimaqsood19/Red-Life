import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {createContainer} from 'meteor/react-meteor-data';
import Gravatar from 'react-gravatar'

import {Profiles} from '../../../collections/profiles';
import SetupProfile from '../../containers/SetUpProfile/index.js';

import './styles.css';

const ProfileCard = ({user , userVote, loginUserId}) => {
    let course = '';
    let bio = '';

    if (user.course !== undefined) {
        course = user.course;
    } else {
        course = 'unknown';
    }

    if (user.bio !== undefined) {
        bio = user.bio;
    } else {
        bio = ' ';
    }

    return (
        <div className="OuterBody">
            <div className="container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Profile</h1>

                    <div className="input-container">
                        <div className="content-slider">
                            <div className="slider-item">
                                <figure>
                                    <CardHeader className="profileImage"
                                        avatar={<Gravatar email={user.emails[0].address} size={500}/>}
                                    />
                                    <div className="figcaption">
                                        <span className="desc"><h3>{` ${user.course}`}</h3></span>
                                        <span className="name"><h2>{user.name}</h2></span>
                                        <span className="price">{user.bio}</span>
                                    </div>
                                </figure>
                                <div className="bar"></div>
                            </div>
                            <div className="VoteCountContainer"><a href="#" className="VoteCount">{`Voted: ${userVote}`}</a></div>

                        </div>
                    </div>
                </div>

                <div className="card alt">
                    {user._id === loginUserId ?
                        <Link to="/editprofile"> <div className="editToggle"></div></Link>
                    : ''
                    }
                    <h1 className="title">Register
                        <div className="close"></div>
                    </h1>
                    <form>
                        <div className="input-container">
                            <input type="#{type}" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="#{type}" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="#{type}" id="#{label}" required="required"/>
                            <label htmlFor="#{label}">Repeat Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button><span>Next</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;
