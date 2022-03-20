import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentWeatherIdSelector,
    getTemperatureSelector,
    getWeatherDetailsSelector,
} from '../../redux/weather/selectors';
import classes from './WeatherDetails.module.scss';
import { LikeBtn, DetailsInfo, DetailsTitle, DetailsHeader } from '..';
import { setFavorite, deleteFavorite } from '../../redux/weather/slice';
import { currentDate } from '../../utils/helpers';

const WeatherDetails = () => {
    const dispatch = useDispatch();
    const id = useSelector(getCurrentWeatherIdSelector);
    const [icon, city, description] = useSelector(getWeatherDetailsSelector);
    const [temperature, degreese] = useSelector(getTemperatureSelector);

    const payload = {
        id: id,
        icon: icon,
        name: city,
        desc: description,
        temp: temperature,
        deg: degreese
    }

    const setToFavorite = useCallback((weather) => {
        dispatch(setFavorite(weather));
    }, [payload]);

    const delFromFavorite = useCallback((id) => {
        dispatch(deleteFavorite(id));
    }, [payload]);

    return (
        <div className={classes.details}>
            <DetailsHeader>
                <DetailsInfo
                    img={icon}
                    description={description}
                    city={city}
                    date={currentDate}
                />
                <LikeBtn
                    setToFavorite={setToFavorite}
                    delFromFavorite={delFromFavorite}
                    payload={payload}
                />
            </DetailsHeader>
            <DetailsTitle
                description={description}
                temperature={temperature}
                degreese={degreese}
            />
        </div>
    )
}

export default WeatherDetails