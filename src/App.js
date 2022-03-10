import { useSelector } from "react-redux";
import { Footer, Loader, Navbar, AppRouter } from "./components";
import { getIsLoading } from "./redux/app/selectors";
import './styles/styles.scss';

function App() {
  const isLoading = useSelector(getIsLoading);

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
