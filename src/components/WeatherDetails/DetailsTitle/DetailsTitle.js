import React, { memo } from 'react'
import classes from './DetailsTitle.module.scss';

const DetailsTitle = ({ temperature, description, degreese }) => {
    return (
        <div className={classes.title}>
            <h1>{temperature}&deg;
                <span>{degreese}</span>
            </h1>
            <h2>{description}</h2>
        </div>
    )
}

export default memo(DetailsTitle)