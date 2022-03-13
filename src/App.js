import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "./api/weatherService";
import { Footer, Loader, Navbar, AppRouter } from "./components";
import { getIsLoading } from "./redux/app/selectors";
import { getCurrentWeatherIdSelector } from "./redux/weather/selectors";
import './styles/styles.scss';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const weatherId = useSelector(getCurrentWeatherIdSelector);

  useEffect(() => {
    dispatch(getWeather(weatherId))
  }, [weatherId])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
