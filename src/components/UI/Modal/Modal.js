import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import classes from './Modal.module.css';

const modal = props => {

    return (
        <Aux>
            <Backdrop show={props.show} close={props.modalClosed}/>
            <div className={classes.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translateX(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Aux>
    )
};

export default React.memo(modal, (prevProps, nextProps) => {
    return nextProps.show === prevProps.show && nextProps.children === prevProps.children
});
