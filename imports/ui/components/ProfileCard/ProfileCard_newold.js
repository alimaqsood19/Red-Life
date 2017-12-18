import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {Profiles} from '../../../collections/profiles';
import {createContainer} from 'meteor/react-meteor-data';

import './styles.css';



const ProfileCard = ({user , userVote}) => {


    //console.log(user._id);
    //console.log (user);

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

   <div className="individual-profile-card">
  <div className="product-viewer">
  <div className="header">
    <a href="#" className="VoteCount">{`Voted: ${userVote}`}</a>

    <ul className="menu">
      <li><a href=""></a></li>
    </ul>
  </div>
  <section className="product-viewer_content">

    <div className="content-slider slide-2-active">
      <div className="slider-item">
        <figure>
          {/* <img src="https://puu.sh/k27la/555a930f8e.png" alt="" /> */}
          <img src="/images/grumpy_dog.jpg" alt="" />

          <div className="figcaption">
            <span className="desc"><h3>{`Enrolled in:  ${user.course}`}</h3></span>
            <span className="name"><h2>{user.name}</h2></span>
            <span className="price">{user.bio}</span>
          </div>
        </figure>
      </div>
    </div>

  </section>
</div>
</div>

        )
};

export default ProfileCard;
