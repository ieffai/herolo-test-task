import React, { memo } from 'react'
import classes from './DetailsInfo.module.scss';

const DetailsInfo = ({ img, description, city, date }) => {
    return (
        <>
            <img
                className={classes.icon}
                src={img}
                alt={description}
            />
            <div className={classes.info}>
                <p>{city}</p>
                <p>{date}</p>
            </div>
        </>
    )
}

export default memo(DetailsInfo)