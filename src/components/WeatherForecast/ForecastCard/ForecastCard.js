import React from 'react'
import { useSelector } from 'react-redux';
import { getUnitTypeSelector } from '../../../redux/weather/selectors';
import classes from './ForecastCard.module.scss';

const ForecastCard = ({ day, icon, desc, temp }) => {
    const isMetric = useSelector(getUnitTypeSelector)
    return (
        <div className={classes.card}>
            <span className={classes.card__day}>{day}</span>
            <div className={classes.card__img} style={{ backgroundImage: `url(${icon})` }}></div>
            <span className={classes.card__temp}>{temp}&deg;{isMetric ? 'C' : 'F'}</span>
            <span className={classes.card__desc}>{desc}</span>

        </div>
    )
}

export default ForecastCard