import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResults } from '../../../api/weatherService';
import { getErrorSelector, getSearchedResultsSelector } from '../../../redux/app/selectors';
import { setError, setSearched } from '../../../redux/app/slice';
import { setWeatherInfo } from '../../../redux/weather/slice';
import AutocompleteResults from '../../AutocompleteResults/AutocompleteResults';

import classes from './Search.module.scss';

const Search = () => {
    const dispatch = useDispatch();
    const results = useSelector(getSearchedResultsSelector);
    const error = useSelector(getErrorSelector);
    const [input, setInput] = useState('');

    const onSearch = text => {
        !text && dispatch(setSearched([]));
        text && dispatch(getSearchResults(text))
    };

    const updateField = (event, id, update = true) => {
        dispatch(setError(''))
        const input = event?.target ? event.target.value : event;
        const city = input && input[0].toUpperCase() + input.slice(1)
        const isCompleted = results.length === 1 && results[0].LocalizedName === city;
        const payload = {
            id: id,
            city: city
        }
        if (update) {
            onSearch(city);
            setInput(city);
            isCompleted && dispatch(setWeatherInfo(payload));
        } else {
            setInput(city);
            dispatch(setWeatherInfo(payload));
            dispatch(setSearched([]));
        }
    }

    const updateText = (city, id) => {
        updateField(city, id, false);
        dispatch(setSearched([]));
    };

    const cancelSearch = () => {
        setInput('');
        dispatch(setError(''))
        dispatch(setSearched([]));
    };

    return (
        <form className={classes.search}>
            <label htmlFor="search">Search</label>
            <input
                required
                autoComplete="off"
                placeholder={'Type city name here...'}
                value={input}
                onChange={updateField}
            />
            <span className={classes.search__caret}></span>
            {
                input.length > 0 &&
                <button
                    className={classes.cancelSearch}
                    onClick={cancelSearch}>
                    x
                </button>
            }
            {results.length > 0 && (
                <AutocompleteResults
                    updateText={updateText}
                />
            )}
            {
                error !== '' && <span style={{ color: 'red' }}>{error}</span>
            }
        </form>
    )
}

export default memo(Search)