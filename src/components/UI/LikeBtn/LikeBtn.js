import React, { memo } from 'react'
import { LIKE_ICON } from '../../../utils/images';
import classes from './LikeBtn.module.scss';

const LikeBtn = () => {
    return (
        <div className={classes.like}>
            <img src={LIKE_ICON} alt='liked' />
        </div>
    )
}

export default memo(LikeBtn)