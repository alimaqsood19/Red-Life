import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import EmailPasswordForm from './EmailPasswordForm';
import './styles.css';

class Register extends Component{
    getDefaultProps() {
      let loginMsg = "Already have an account?";
      return {
        loginLink: <p>{loginMsg} <a href="/login">Sign In</a></p>
      };
    }

    createUser = (e) => {
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

          Accounts.createUser(
            {
                email: email,
                password: password
            },
            function(error) {
              if (error) {
                  errorMessage = "There was an error: " + error.reason;
                  alert(errorMessage);
              } else {
                  thisProps.history.push(`/setupprofile`);
              };
            }
          );
      }
    }

    render() {
      return (
        <div className="registerContainer row">
          <div className="registerSection col-md-6 col-md-offset-3">
            <h1>Register</h1>
              <EmailPasswordForm
                submitBtnLabel="Register"
                submitAction={this.createUser}
              />
             {this.props.loginLink}
          </div>
        </div>
      )
    }
};

const newRegister = withRouter(Register);

export default newRegister;
