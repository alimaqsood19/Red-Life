import React, {Component} from 'react';
import Layout from '../imports/ui/components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../imports/ui/config/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import muiTheme from '../imports/ui/config/theme';
import Ideas from '../imports/ui/containers/IdeaContainer';
import Users from '../imports/ui/containers/UsersContainer';
import CreateIdea from '../imports/ui/containers/CreateIdea';
import SetUpProfile from '../imports/ui/containers/SetUpProfile';
import NotFound from '../imports/ui/components/NotFound';
import EditProfile from '../imports/ui/containers/EditProfile';
import ProfileContainer from '../imports/ui/containers/ProfileContainer';
import Home from '../imports/ui/components/Home';
import Register from '../imports/ui/components/forms/Register';
import { Meteor } from 'meteor/meteor';

class ensureLoggedIn extends Component {
    componentWillMount() {
        setTimeout(() => {
            if (!Meteor.userId()){
                //console.log("Not logged in")
                this.props.history.push('/')

            } else {
                //console.log("login")
            }
        }, 200)
    }

    render() {
        return (<div>
                    <Route exact path="/setupprofile" component={SetUpProfile} />
                    <Route exact path="/ideas" component={Ideas} />
                    <Route exact path="/users" component={Users} />
                    <Route path="/profile/:userid"  component={ProfileContainer} />
                    <Route exact path="/createidea" component={CreateIdea} />
                    <Route exact path="/editprofile" component={EditProfile} />
                </div>
        )
    }
}


class App extends Component {

    render(){
        return(
            <div>
            <BrowserRouter>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/register" component={Register} />
                            <Route component={ensureLoggedIn}/>
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </MuiThemeProvider>
            </BrowserRouter>
          </div>
        )
    }
};

export default App;
