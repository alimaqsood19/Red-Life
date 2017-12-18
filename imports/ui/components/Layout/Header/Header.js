import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Button from '../Button';


import './styles.css';

const styles = {
    header: {
        backgroundColor: '#e1231a',
        zIndex: '9999 !important',
    },
    title: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        paddingLeft: '1rem',
    }
};

const RenderWithLinkToLogin = () => {
    return (
        <div className="Header">
        <Toolbar style={styles.header}>
            <ToolbarGroup firstChild={true}>
            <Link to="/">
                <img src="/images/red-logo.png" alt="red logo" className="logo" />
            </Link>
                <ToolbarTitle text="Life" style={styles.title} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
            {location.pathname !== '/login' && location.pathname !== '/setupprofile' ? <Button /> : null}
            </ToolbarGroup>
        </Toolbar>
    </div>
    )
}

const RenderWithLinkIdeas = () => {
    return (
        <div className="Header">
        <Toolbar style={styles.header}>
            <ToolbarGroup firstChild={true}>
            <Link to="/ideas">
                <img src="/images/red-logo.png" alt="red logo" className="logo" />
            </Link>
                <ToolbarTitle text="Life" style={styles.title} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
            {location.pathname !== '/login' && location.pathname !== '/setupprofile' ? <Button /> : null}
            </ToolbarGroup>
        </Toolbar>
        </div>
    )
} 

const RenderWithJustImage = () => {
    return (
        <div className="Header">
        <Toolbar style={styles.header}>
            <ToolbarGroup firstChild={true}>
                <img src="/images/red-logo.png" alt="red logo" className="logo" />
                <ToolbarTitle text="Life" style={styles.title} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
            {location.pathname !== '/login' && location.pathname !== '/setupprofile' ? <Button /> : null}
            </ToolbarGroup>
        </Toolbar>
    </div>
    )
}

class Header extends Component {

    render() {
        let logo = null;
        if (location.pathname == '/') {
            return logo = null;
        }else if (location.pathname !== '/register'){
            return logo = <RenderWithLinkIdeas />
        }else if (location.pathname !== '/login' && location.pathname !== '/setupprofile' && location.pathname !== '/') {
            return logo = <RenderWithLinkToLogin />
        }
        else {
            return logo = <RenderWithJustImage />
        }


    return (
        {logo}
    )
};
}

export default Header;