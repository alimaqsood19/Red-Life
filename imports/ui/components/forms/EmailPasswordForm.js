import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class EmailPasswordForm extends Component{
    // getDefaultProps() {
    //   return {
    //     submitBtnLabel: "Submit"
    //   };
    // }

    render() {
      return (
        <form onSubmit={this.props.submitAction}>
          <div className="form-group">
            <label htmlFor="email">Email:&nbsp;</label>
            <input placeholder="Email" type="email" id="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:&nbsp;</label>
            <input placeholder="Password" type="password" id="password" className="form-control"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">{this.props.submitBtnLabel}</button>
          </div>
        </form>
      )
    }
};

export default EmailPasswordForm;

// propTypes: {
//     submitAction: React.PropTypes.func.isRequired
// }
