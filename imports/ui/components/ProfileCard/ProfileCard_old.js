import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {Profiles} from '../../../collections/profiles';
import {createContainer} from 'meteor/react-meteor-data';

import './styles.css';



const ProfileCard = ({user , userVote}) => {




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
            <div className = "singleProfile ">


                <Card className="profileCard" style={{borderRadius: "50px"}}>
                    <div className="flex">
                        <div className="width-60">
                            <CardMedia className="profileImage"   >
                                    <img src="/images/grumpy_dog.jpg" alt="" />
                            </CardMedia>
                        </div>
                    
                        <div className ="align-self-center  ">
                            <div className="profileCardName">
                            <CardTitle title={user.name} subtitle={user.bio} titleColor="#e1231a" />
                            </div>
                    
                            <CardText > {`Enrolled in:  ${user.course}`}  </CardText>
                            <CardText >  {`Voted: ${userVote}`} </CardText>

                        </div>
                    </div>

                </Card> 

                    <div className="profileCardButton">

                        <Link to="/users">
                            <CardActions>
                                <div className="viewButton">
                                   <RaisedButton backgroundColor= "#e1231a" labelColor="#FAFAFA" label="Back To All Users" />
                                </div>
                            </CardActions>
                        </Link>
                    </div>
            

            </div>

        )
};

export default ProfileCard;

