import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getWeather } from '../../../api/weatherService';
import { getUnitTypeSelector } from '../../../redux/weather/selectors';
import { deleteFavorite } from '../../../redux/weather/slice';
import { HOME_ROUTE } from '../../../routes/routesConsts';
import { DELETE_ICON } from '../../../utils/images';
import classes from './FavoriteCard.module.scss';

const FavoriteCard = ({ id, place, icon, temp, deg }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMetric = useSelector(getUnitTypeSelector);
    const navHandler = () => {
        dispatch(getWeather(id, isMetric, place));
        navigate(HOME_ROUTE);
    }

    const delHandler = (e) => {
        e.stopPropagation();
        dispatch(deleteFavorite(id));
    }

    return (
        <div
            className={classes.card}
            onClick={navHandler}
        >
            <img
                className={classes.card__delete}
                src={DELETE_ICON}
                alt='delete button'
                onClick={delHandler}
            />
            <img className={classes.card__icon} src={icon} alt="current weather" />
            <span>{temp}&deg;{deg}</span>
            <p>{place}</p>

        </div>
    )
}

export default FavoriteCard