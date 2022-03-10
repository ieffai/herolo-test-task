import React, { memo } from 'react'
import { NavList } from '..';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <NavList />
        </div>
    )
}

export default memo(Footer)