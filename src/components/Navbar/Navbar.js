import React, { memo } from 'react'
import { LOGO } from '../../utils/images';
import classes from './Navbar.module.scss';

const Navbar = () => {
    return (
        <header className={classes.navbar}>
            <div className={classes.navbar__logo}>
                <img src={LOGO} alt="Herolo logo" />
            </div>
            <div className={classes.navbar__info}>
                <div className={classes.navbar__line} />
                <p>
                    Weather App<span> by Sergey Karlinskiy</span>
                </p>
            </div>
        </header>
    )
}

export default memo(Navbar)