import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentWeatherIdSelector,
    getPlaceNameSelector,
    getTemperatureSelector,
    getWeatherIconSelector,
    getWeatherTextSelector
} from '../../redux/weather/selectors';
import classes from './WeatherDetails.module.scss';
import LikeBtn from '../UI/LikeBtn/LikeBtn';
import { setFavorite, deleteFavorite } from '../../redux/weather/slice';

const WeatherDetails = () => {
    const dispatch = useDispatch();
    const id = useSelector(getCurrentWeatherIdSelector);
    const icon = useSelector(getWeatherIconSelector);
    const weatherDescription = useSelector(getWeatherTextSelector);
    const location = useSelector(getPlaceNameSelector);
    const date = new Date().toLocaleDateString();
    const [temperature, degreese] = useSelector(getTemperatureSelector);

    const payload = {
        id: id,
        icon: icon,
        name: location,
        desc: weatherDescription,
        isLiked: true
    }

    const setToFavorite = useCallback((weather) => {
        dispatch(setFavorite(weather));
    }, [payload]);

    const delFromFavorite = useCallback((id) => {
        dispatch(deleteFavorite(id));
    }, [payload]);

    return (
        <div className={classes.details}>
            <div className={classes.details__header}>
                <img className={classes.details__icon} src={icon} alt={weatherDescription} />
                <div className={classes.details__info}>
                    <div>{location}</div>
                    <div>{date}</div>
                </div>
                <LikeBtn setToFavorite={setToFavorite} delFromFavorite={delFromFavorite} payload={payload} />
            </div>
            <h1 className={classes.details__title}>{weatherDescription}</h1>
            <h2>{temperature}&deg; <span>{degreese}</span></h2>

        </div>
    )
}

export default WeatherDetails