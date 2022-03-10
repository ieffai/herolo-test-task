import React, { memo } from 'react'
import classes from './Search.module.scss';

const Search = () => {
    return (
        <form className={classes.search}>
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="search"
                required
                autocomplete="off"
                placeholder={'Type city name here...'}
            />
            <span className={classes.search__caret}></span>
        </form>
    )
}

export default memo(Search)