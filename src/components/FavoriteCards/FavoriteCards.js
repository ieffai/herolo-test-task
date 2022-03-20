import React from 'react'
import classes from './FavoriteCards.module.scss';

const FavoriteCards = ({ children }) => {
    return (
        <div className={classes.cards}>{children}</div>
    )
}

export default FavoriteCards