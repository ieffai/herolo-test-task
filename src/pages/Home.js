import React from 'react'
import { Search, WeatherDetails, WeatherForecast } from '../components'

const Home = () => {
    return (
        <div className='page'>
            <Search />
            <WeatherDetails />
            {/* <WeatherForecast /> */}
        </div>
    )
}

export default Home