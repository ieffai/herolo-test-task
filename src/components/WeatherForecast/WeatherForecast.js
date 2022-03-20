import React from 'react'
import { useSelector } from 'react-redux';
import { getForecastSelector } from '../../redux/weather/selectors';
import { getWeekDay } from '../../utils/helpers';
import { icons } from '../../utils/iconsData';
import ForecastCard from './ForecastCard/ForecastCard'
import classes from './WeatherForecast.module.scss';

const WeatherForecast = () => {
    const forecast = useSelector(getForecastSelector);

    const iconsDict = icons.reduce((dict, icon) => {
        dict[icon.number] = icon;
        return dict;
    }, {})

    const averageTemp = (min, max) => {
        const temp = (min + max) / 2;
        const roundedTemp = Math.round(temp)
        return roundedTemp
    }

    return (
        <div className={classes.forecast}>
            {forecast.map((card) => (
                <ForecastCard
                    key={card.EpochDate}
                    day={getWeekDay(card.Date)}
                    icon={iconsDict[card.Day.Icon].url}
                    desc={card.Day.IconPhrase}
                    temp={averageTemp(card.Temperature.Minimum.Value, card.Temperature.Maximum.Value)}
                />
            ))}
        </div>
    )
}

export default WeatherForecast