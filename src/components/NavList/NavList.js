import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { publicRoutes } from '../../routes/publicRoutes';
import classes from './NavList.module.scss';

const NavList = () => {
    let activeStyle = {
        opacity: '0.6',
    };

    return (
        <nav>
            <ul className={classes.navlist}>
                {publicRoutes.map((link) => (
                    <li className={classes.navlist__link} key={link.path}>
                        <NavLink
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            to={link.path}>
                            <img className={classes.navlist__icon} src={link.image} alt="Herolo logo" />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default memo(NavList)