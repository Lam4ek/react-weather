import React from "react";
import LocationInput from "./LocationInput/LocationInput";
import SunState from "./SunState";
import Showinfo from "./Showinfo";
import Details from "./Details";
import styles from "./Sidebar.module.css";
import { useState } from "react";

function Sidebar({ gettingWeather, weatherInfo, typeDegrees, width }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className={styles.sidebar}>
      {width > 960 && <LocationInput gettingWeather={gettingWeather} />}
      <SunState weatherInfo={weatherInfo} />
      <Showinfo setShowInfo={setShowInfo} showInfo={showInfo} />
      <Details
        showInfo={showInfo}
        weatherInfo={weatherInfo}
        typeDegrees={typeDegrees}
      />
    </div>
  );
}

export default Sidebar;
