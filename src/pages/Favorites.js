import React from 'react'
import { useSelector } from 'react-redux'
import { FavoriteCard, FavoriteCards, NoResults } from '../components';
import { getFavoritesSelector } from '../redux/weather/selectors'

const Favorites = () => {
    const favorites = useSelector(getFavoritesSelector);



    return (
        <div className='page'>
            {
                favorites.length === 0
                    ? <NoResults />
                    : <FavoriteCards>
                        {favorites.map((card) => (
                            <FavoriteCard
                                key={card.id}
                                id={card.id}
                                place={card.name}
                                icon={card.icon}
                                temp={card.temp}
                                deg={card.deg}
                            />
                        ))}

                    </FavoriteCards>
            }

        </div>
    )
}

export default Favorites