import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeatherSelector, getWeatherIconSelector, getWeatherTextSelector } from '../../redux/weather/selectors';
import { icons } from '../../utils/iconsData';
import classes from './WeatherDetails.module.scss';
import LikeBtn from '../UI/LikeBtn/LikeBtn';

const WeatherDetails = () => {
    const dispatch = useDispatch();
    // const iconId = useSelector(getWeatherIconSelector);
    const iconId = '1';
    const icon = icons.find(item => item.number === +iconId)?.url;
    const weatherDescription = useSelector(getWeatherTextSelector);
    return (
        <div className={classes.details}>
            <div className={classes.details__header}>
                <img className={classes.details__icon} src={icon} alt={weatherDescription} />
                <div className={classes.details__info}>
                    <div>Tel Aviv</div>
                    <div>11.03.2021</div>
                </div>
                <LikeBtn />
            </div>
            <h1 className={classes.details__title}>Scattered Clouds</h1>
            <h2>38&deg; <span>C</span></h2>

        </div>
    )
}

export default WeatherDetails