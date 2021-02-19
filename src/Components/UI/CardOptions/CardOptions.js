import React from 'react';

import classes from './CardOptions.module.css';

const CardOptions = props => {
    return (
        <div className={`${classes.ribbon} ${classes.ribbon_top_right}`}><span>{props.children}</span></div>
    );
};

export default CardOptions;