import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { getSearchedResultsSelector } from '../../redux/app/selectors';
import classes from './AutocompleteResults.module.scss';

const AutocompleteResults = ({ updateText, cancelSearch }) => {
    const results = useSelector(getSearchedResultsSelector);

    const handleSelect = (name, value) => {
        console.log(name);
        // updateText(name, value);
    }

    const handleReset = (e) => {
        e.preventDefault();
        cancelSearch();
    }
    return (
        <div className={classes.options}>
            {results.map((item) => (
                <div key={item.Key} onClick={() => handleSelect(item.LocalizedName, item.Key)} className={classes.option}>
                    <span >
                        {item.LocalizedName}
                    </span>
                </div>
            ))}
            <button
                className={classes.cancelSearch}
                onClick={handleReset}>
                x
            </button>
        </div>
    )
}

export default memo(AutocompleteResults)