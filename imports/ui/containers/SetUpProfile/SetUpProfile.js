import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {createContainer} from 'meteor/react-meteor-data';
import {Profiles} from '../../../collections/profiles';
import SelectField from 'material-ui/SelectField';

import './styles.css';

class SetUpProfile extends Component{
  constructor(){
    super();

    this.state = {
      name: '',
      course: '',
      bio: '',
      picture: ''
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })
  }
  handleDropDown = (event, index, course) => this.setState({course});

  handleSubmit = (event) => {
      event.preventDefault();

      // form field validations

      let errorMessage = "";
      let fieldLength = 0;

      fieldLength = this.refs.name.props.value.length;
      if (fieldLength === 0) {
          errorMessage += "Name cannot be blank.\n"
      } else if (fieldLength > 30) {
          errorMessage += "Name length cannot exceed 30 characters.\n"
      }

      fieldLength = this.refs.course.props.value.length;
      if (fieldLength === 0) {
          errorMessage += "Course cannot be blank.\n"
      }

      fieldLength = this.refs.bio.props.value.length;
      if (fieldLength > 150) {
          errorMessage += "Bio length cannot exceed 150 characters.\n"
      }

      if (errorMessage.length > 0) {
          errorMessage += "\nPlease correct before submitting.\n"
          alert(errorMessage);
      } else {
          Meteor.call('profiles.update', this.state)
          // redirect to ideas page after submit
          this.props.history.push(`/ideas`);
      }
  }

  render(){
      return(
        <div className="OuterBody">
        <div className="container">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">SETUP PROFILE</h1>
          <form>
            <div className="input-container">
                <TextField name="name"
                ref="name"
                hintText="What's your name?"
                fullWidth label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </div>

            <div className="input-container">

                <SelectField
                     hintText= "Select Your Course" fullWidth
                     value={this.state.course}
                     onChange={this.handleDropDown}
                     name="course"
                     ref="course"
                      >
                    <MenuItem value="UX Designer Professional" primaryText="UX Designer Professional" />
                    <MenuItem value="UI Designer Professional" primaryText="UI Designer Professional" />
                    <MenuItem value="Web Developer Professional" primaryText="Web Developer Professional" />
                    <MenuItem value="Application Developer Professional" primaryText="Application Developer Professional" />
                    <MenuItem value="Digital Marketing Professional" primaryText="Digital Marketing Professional" />
                    <MenuItem value="RED Staff" primaryText="RED Staff" />
                </SelectField>
            </div>

            <div className="input-container">
                <TextField name="bio"
                ref="bio"
                hintText="About you"
                fullWidth label="bio"
                value={this.state.bio}
                onChange={this.handleChange}
                />
            </div>

            <div className="gravatarSetup">
                <a href="http://www.gravatar.com" target="_blank">Click here to set up a Gravatar.</a>
            </div>

            <div className="button-container">
              <button type="submit" label="SUBMIT Profile info" onClick={this.handleSubmit}><span>Submit</span></button>
            </div>
          </form>
        </div>
        </div>
        </div>
      )
  }
}

const newSetUpProfile = withRouter(SetUpProfile);
export default newSetUpProfile;
