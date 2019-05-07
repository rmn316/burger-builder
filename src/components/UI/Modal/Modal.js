import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import classes from './Modal.module.css';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} close={props.modalClosed}/>
        <div className={classes.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translateX(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;