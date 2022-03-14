import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import { getSearchedResultsSelector } from '../../redux/app/selectors';
import classes from './AutocompleteResults.module.scss';

const AutocompleteResults = ({ updateText }) => {
    const results = useSelector(getSearchedResultsSelector);

    const handleSelect = (city, id) => {
        updateText(city, id);
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
        </div>
    )
}

export default memo(AutocompleteResults)