import React from "react";
import styles from "./MainPage.module.css";
import AppContext from "../../context";
import LocationInput from "../sidebar/LocationInput/LocationInput";

function Header() {
  const {
    typeDegrees,
    setTypeDegrees,
    weatherInfo,
    setShowSidebar,
    showSidebar,
    width,
  } = React.useContext(AppContext);

  const clouds = ["scattered clouds", "broken clouds", "overcast clouds"];
  const mist = [
    "mist",
    "smoke",
    "haze",
    "sand/dust whirls",
    "fog",
    "sand",
    "dust",
    "volcanic ash",
    "squalls",
    "tornado",
  ];

  if (weatherInfo.list !== undefined) {
    var imgURL =
      weatherInfo.list[0].weather[0].main === "Clouds" &&
      weatherInfo.list[0].weather[0].description === "few clouds"
        ? `Clouds${
            new Date().getUTCHours() + weatherInfo.city.timezone / 3600 > 5 &&
            new Date().getUTCHours() + weatherInfo.city.timezone / 3600 < 23
              ? "Day"
              : "Night"
          }`
        : clouds.includes(weatherInfo.list[0].weather[0].description) &&
          weatherInfo.list[0].clouds.all > 80
        ? "scattered clouds"
        : mist.includes(weatherInfo.list[0].weather[0].description)
        ? `Mist${
            new Date().getUTCHours() + weatherInfo.city.timezone / 3600 > 5 &&
            new Date().getUTCHours() + weatherInfo.city.timezone / 3600 < 23
              ? "Day"
              : "Night"
          }`
        : weatherInfo.list[0].weather[0].main === "Rain" &&
          weatherInfo.list[0].clouds.all > 80
        ? "Drizzle"
        : `${weatherInfo.list[0].weather[0].main}${
            new Date().getUTCHours() + weatherInfo.city.timezone / 3600 > 5 &&
            new Date().getUTCHours() + weatherInfo.city.timezone / 3600 < 23
              ? "Day"
              : "Night"
          }`;
  }
  return (
    <div className={styles.headerContainer}>
      <img
        width={100}
        height={100}
        src={`weather-icons/${imgURL}.png`}
        alt="ico"
      />

      {width > 960 && (
        <h2>{weatherInfo.list !== undefined ? weatherInfo.city.name : ""}</h2>
      )}
      <label className={styles.switch}>
        <input type="checkbox" />
        <span
          onClick={() => setTypeDegrees(!typeDegrees)}
          className={styles.slider}
        >
          <span>{typeDegrees ? "C" : "F"}</span>
        </span>
      </label>
      {width < 960 && <LocationInput />}
    </div>
  );
}

export default Header;
