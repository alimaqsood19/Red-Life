import React, {Component} from 'react';
import Login from '../forms/Login';
import {withRouter} from 'react-router-dom';
import './styles.css';

class Home extends Component {
    componentWillMount(){
        Meteor.userId() ? this.props.history.push(`/ideas`) : null;
    }

    render(){
        return (
            <div className="homeContainer">
                <div className="homeSection">
                    <h1>RED <span>Life</span></h1>
                </div>
                <div className="loginSection">
                <Login />
                </div>
            </div>
            );
    }
}

const newHome = withRouter(Home);
export default newHome;
