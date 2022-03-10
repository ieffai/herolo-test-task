import React, { memo } from 'react'
import classes from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={classes.loader}>Loading</div>
    )
}

export default memo(Loader)