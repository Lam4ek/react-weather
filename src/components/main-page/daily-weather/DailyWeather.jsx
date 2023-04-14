import React from "react";
import styles from "./DailyWeather.module.css";
import AppContext from "../../../context";

function DailyWeather() {
  const { weatherInfo, typeDegrees } = React.useContext(AppContext);
  const date = new Intl.DateTimeFormat("eng", {
    day: "numeric",
    month: "long",
  }).format(new Date());
  const weekday = new Intl.DateTimeFormat("eng", {
    weekday: "long",
  })
    .format(new Date())
    .replace(/(\s?\г\.?)/, "");
  return (
    <div className={styles.dailyWeather}>
      <div>
        <h1>
          {weatherInfo.list !== undefined
            ? Math.round(weatherInfo.list[0].main.temp)
            : "0"}
          <span>&#176;{typeDegrees ? "C" : "F"}</span>
        </h1>
      </div>

      <span
        style={{
          fontSize: "40px",
          lineHeight: "120%",
          fontWeight: "300",
          marginBottom: "20px",
        }}
      >
        {date}
      </span>

      <div className={styles.time}>
        <span>{weekday}</span>
        <h3>
          {weatherInfo.list !== undefined
            ? new Date().getUTCHours() +
                Math.floor(weatherInfo.city.timezone / 3600) <
              10
              ? `0${
                  new Date().getUTCHours() +
                  Math.floor(weatherInfo.city.timezone / 3600)
                }` + ":"
              : `${
                  new Date().getUTCHours() +
                  Math.floor(weatherInfo.city.timezone / 3600)
                }` + ":"
            : ""}
          {`${
            new Date().getUTCMinutes() > 10
              ? new Date().getUTCMinutes()
              : `0${new Date().getUTCMinutes()}`
          }`}
          {}
        </h3>
      </div>

      <div className={styles.weatherInfo}>
        <span>
          <img src="img/wind-icon.png" alt="" />
          Wind{" "}
          {weatherInfo.list !== undefined
            ? weatherInfo.list[0].wind.speed
            : 0}{" "}
          {typeDegrees ? "meter/s" : "miles/h"}
        </span>
        <span>
          <img src="img/humidity-icon.png" alt="" />
          Hum{" "}
          {weatherInfo.list !== undefined
            ? weatherInfo.list[0].main.humidity
            : 0}
          %
        </span>
        <span>
          <img src="img/rain-icon.png" alt="" />
          Clouds{" "}
          {weatherInfo.list !== undefined ? weatherInfo.list[0].clouds.all : 0}%
        </span>
      </div>
    </div>
  );
}

export default DailyWeather;
