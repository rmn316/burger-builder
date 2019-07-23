import React, { useState } from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const layout = props => {
    const [sideDrawIsVisible, setSideDrawIsVisible] = useState(false);

    const sideDrawClosedHandler = () => {
        setSideDrawIsVisible(false);
    };

    const sideDrawToggleHandler = () => {
        setSideDrawIsVisible(!sideDrawIsVisible);
    };

    return (
        <Aux>
            <Toolbar isAuth={props.isAuthenticated} drawerToggleClicked={sideDrawToggleHandler} />
            <SideDrawer isAuth={props.isAuthenticated} open={sideDrawIsVisible} closed={sideDrawClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(layout);
