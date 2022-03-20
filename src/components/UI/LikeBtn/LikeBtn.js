import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { getIsLikedSelector } from '../../../redux/weather/selectors';
import { LIKE_ICON, UNLIKE_ICON } from '../../../utils/images';
import classes from './LikeBtn.module.scss';

const LikeBtn = ({ setToFavorite, delFromFavorite, payload }) => {
    const isLiked = useSelector(getIsLikedSelector);
    const likeHandler = () => {
        isLiked ? delFromFavorite(payload.id) : setToFavorite(payload);
    }

    return (
        <div className={classes.like} onClick={likeHandler}>
            <img
                src={isLiked ? LIKE_ICON : UNLIKE_ICON}
                alt='liked'

            />
        </div>
    )
}

export default memo(LikeBtn)