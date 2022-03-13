import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResults } from '../../../api/weatherService';
import { getErrorSelector, getSearchedResultsSelector } from '../../../redux/app/selectors';
import { setError, setSearched } from '../../../redux/app/slice';
import { setCurrentWeatherId } from '../../../redux/weather/slice';
import AutocompleteResults from '../../AutocompleteResults/AutocompleteResults';

import classes from './Search.module.scss';

const Search = () => {
    const dispatch = useDispatch();
    const results = useSelector(getSearchedResultsSelector);
    const error = useSelector(getErrorSelector);
    const [input, setInput] = useState('');

    const onSearch = text => {
        dispatch(getSearchResults(text))
    };

    const updateField = (event, value, update = true) => {
        dispatch(setError(''))
        const name = event?.target ? event.target.value : event;
        const isCompleted = results.length === 1 && results[0].LocalizedName === name;
        if (update) {
            onSearch(name);
            setInput(name);
            isCompleted && setCurrentWeatherId(results[0].Key);
        } else {
            setInput(name);
            dispatch(setCurrentWeatherId(value))
            dispatch(setSearched([]));
        }
    }

    const updateText = (name, value) => {
        updateField(name, value, false);
        dispatch(setSearched([]));
    };

    const cancelSearch = () => {
        setInput('');
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
            {results.length > 0 && (
                <AutocompleteResults
                    updateText={updateText}
                    cancelSearch={cancelSearch}
                />
            )}
            {
                error !== '' && <span style={{ color: 'red' }}>{error}</span>
            }
        </form>
    )
}

export default memo(Search)