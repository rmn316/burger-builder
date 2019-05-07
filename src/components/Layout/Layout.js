import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDraw: true
    };

    sideDrawClosedHandler = () => {
        console.log('aaa');
        this.setState({showSideDraw: false});
    };

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDraw} closed={this.sideDrawClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;