import React from 'react'
import ForecastCard from './ForecastCard/ForecastCard'
import classes from './WeatherForecast.module.scss';

const WeatherForecast = () => {
    return (
        <div className={classes.forecast}>
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
        </div>
    )
}

export default WeatherForecast