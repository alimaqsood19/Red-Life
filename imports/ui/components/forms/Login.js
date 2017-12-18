import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import EmailPasswordForm from './EmailPasswordForm'

class Login extends Component{
    loginWithPassword = (e) => {
        e.preventDefault();

        const
            email = $('#email').val(),
            password = $('#password').val().trim()
        ;

        // form field validations

        let errorMessage = "";
        let fieldLength = 0;

        fieldLength = email.length;
        if (fieldLength === 0) {
            errorMessage += "Email cannot be blank.\n"
        } else if (fieldLength > 30) {
            errorMessage += "Email length cannot exceed 50 characters.\n"
        }

        fieldLength = password.length;
        if (fieldLength === 0) {
            errorMessage += "Password cannot be blank.\n"
        }

        if (errorMessage.length > 0) {
            errorMessage += "\nPlease correct before submitting.\n"
            alert(errorMessage);
        } else {
            const thisProps = this.props;

            Meteor.loginWithPassword(email, password, function(error) {
                if (error) {
                    errorMessage = "There was an error: " + error.reason;
                    alert(errorMessage);
                } else {
                    thisProps.history.push('/ideas')
                }
            });

            //this.props.history.push(`/ideas`);
        }
    }

    render() {
          return (
              <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1>Login</h1>
              <EmailPasswordForm
                submitBtnLabel="Login"
                submitAction={this.loginWithPassword}
              />
                    <p className="registerButtonHomePage">Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
          )
      }
};

const newLogin = withRouter(Login);

export default newLogin;
