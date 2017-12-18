import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';



const recentsIcon = <FontIcon className="material-icons"></FontIcon>;


class Footer extends Component {

  render() {
    var currentUserId = Meteor.userId();

    return (
      <div className="footer">

        <div>
              <Paper zDepth={1}>
                <BottomNavigation>
                  <BottomNavigationItem
                    label="Copyright &copy; 2017 RED Life"
                    icon={recentsIcon}
                  />
                </BottomNavigation>
              </Paper>
        </div>
      </div>
    );
  }
}

export default Footer;




