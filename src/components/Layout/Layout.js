import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDraw: false
    };

    sideDrawClosedHandler = () => {
        this.setState({showSideDraw: false});
    };

    sideDrawToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDraw: !prevState.showSideDraw}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawToggleHandler} />
                <SideDrawer open={this.state.showSideDraw} closed={this.sideDrawClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;