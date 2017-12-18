import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { BrowserRouter ,Route,Link, Switch } from 'react-router-dom';

import './styles.css';

const NotFound = () => {
    return (
        <div className="notFound">

                <div className= "notFoundImage">
                    <img src="https://thumbs.dreamstime.com/b/d-confused-person-question-mark-illustration-rendering-thinking-frastrated-man-red-white-people-man-character-35217568.jpg" alt="" />
                </div>


            
                <div className="notFoundText">
                        <h1>Oops, this page does not exist </h1>
                        <h2 className="red"> <Link to = '/ideas'> Go Back Home </Link>  </h2>
                </div>
        
        </div>
    )
}

export default NotFound;