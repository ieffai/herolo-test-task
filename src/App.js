import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeoWeather, getInitialWeather, getWeather } from "./api/weatherService";
import { Footer, Loader, Navbar, AppRouter } from "./components";
import { getBackgroundSelector, getIsLoading } from "./redux/app/selectors";
import { getCurrentPlaceSelector, getCurrentWeatherIdSelector, getUnitTypeSelector } from "./redux/weather/selectors";
import './styles/styles.scss';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isMetric = useSelector(getUnitTypeSelector);
  const weatherId = useSelector(getCurrentWeatherIdSelector);
  const place = useSelector(getCurrentPlaceSelector);
  const background = useSelector(getBackgroundSelector);

  const getInitData = () => {
    const geo = navigator.geolocation;
    const onSuccess = ({ coords }) => {
      const coordinates = `${coords.latitude},${coords.longitude}`;
      dispatch(getGeoWeather(isMetric, coordinates));
    };
    const onError = (error) => {
      console.log(error.message);
      dispatch(getInitialWeather(isMetric))
    };
    geo.getCurrentPosition(onSuccess, onError);
  }

  useEffect(() => {
    if (!weatherId) return getInitData();
    dispatch(getWeather(weatherId, isMetric, place))
  }, [weatherId])


  return (
    <div className="app" >
      <div className='background' style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
        {!isLoading ? <AppRouter /> : <Loader />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
