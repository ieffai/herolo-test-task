import React, { memo } from 'react'
import classes from './NoResults.module.scss';

const NoResults = () => {
    return (
        <div className={classes.noResults}>No any favorite places</div>
    )
}

export default memo(NoResults)