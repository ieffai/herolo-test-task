import React from 'react'
import classes from './DetailsHeader.module.scss';

const DetailsHeader = ({ children }) => {
    return (
        <div className={classes.header}>
            {children}
        </div>
    )
}

export default DetailsHeader