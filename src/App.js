import "./App.css";
import { useState, useEffect, setState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import AppContext from "./context";
import MainPage from "./components/main-page/MainPage";
import InputError from "./components/Input-error/InputError";
const API_KEY = "1551dda6f8592b8f9a661b3b90b6dd8e";

function App() {
  const [location, setLocation] = useState("Kiev");
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [isFoundError, setIsFoundError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [typeDegrees, setTypeDegrees] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [width, setwidth] = useState(window.screen.width);

  const gettingWeather = async () => {
    try {
      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${
          typeDegrees ? "metric" : "imperial"
        }&APPID=${API_KEY}`
      );
      const data = await apiUrl.json();
      data.message == 0 ? setWeatherInfo(data) : setWeatherInfo(weatherInfo);
      data.message !== 0 ? setIsFoundError(true) : setIsFoundError(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetch() {
      await gettingWeather();
      await setIsLoading(false);
    }
    fetch();
  }, [typeDegrees]);

  return (
    <AppContext.Provider
      value={{
        weatherInfo,
        isLoading,
        typeDegrees,
        setTypeDegrees,
        setShowSidebar,
        showSidebar,
        setLocation,
        gettingWeather,
        width,
      }}
    >
      <div className="App">
        {isFoundError && (
          <InputError
            setIsFoundError={setIsFoundError}
            isFoundError={isFoundError}
          />
        )}
        <div className="wrapper">
          <MainPage />

          <Sidebar
            weatherInfo={weatherInfo}
            gettingWeather={gettingWeather}
            typeDegrees={typeDegrees}
            isLoading={isLoading}
            width={width}
          />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
