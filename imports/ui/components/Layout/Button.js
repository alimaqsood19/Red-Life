import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, withRouter} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

import './styles.css';
import { setTimeout } from 'timers';

const style = {
  margin: 12,
};

class Button extends Component {

  onSigninClick(event) {
    event.preventDefault();

    Meteor.call('ideas.insert', (error, ideasId) => {
      this.props.history.push(`/ideas/${ideasId}`);
    });
  }

  handleClick() {
    Meteor.logout();
    setTimeout(() => {
      this.props.history.push('/');
    }, 100)

  }

  onHandleClick() {
    setTimeout(() => {
      this.props.history.push(`/profile/${Meteor.userId()}`)
    }, 100)
  }

  render(){
    let pathName = this.props.history.location.pathname;
    //console.log('User', Meteor.userId());
    Meteor.startup(() => {

    })
      return (


      <div className="headerButtons">



       { pathName !== "/" && pathName !== "/setupprofile" && pathName !== "/register" ?
        <div className="ideasUsersButtons">
          <RaisedButton label="Logout" style={style} onClick={(e) => this.handleClick(e)}/>
          <Link to="/ideas"><RaisedButton label="Posts" secondary={true} style={style} /></Link>
          <Link to="/users"><RaisedButton label="Users" secondary={true} style={style} /></Link>

        </div>
        : null }


        <div className="profileButton">
          {pathName !== "/" && pathName !== "/setupprofile" && pathName !== "/register"?
                  <Link to={'/'} onClick={this.onHandleClick.bind(this)}>
                      <Avatar
                        icon={<i className="material-icons ">person</i>}

                        color="#e1231a"
                        backgroundColor="white"
                        size={35}
                        style={style}
                      />
                     </Link>  : null }
        </div>



      </div>

    )
  }
};

const newButton = withRouter(Button);
export default newButton;
