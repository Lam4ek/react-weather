import React from "react";
import styles from "./DailyData.module.css";
import AppContext from "../../context";

function DailyData({ day }) {
  const { isLoading, typeDegrees, weatherInfo } = React.useContext(AppContext);
  const ms = day.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString("eng", { weekday: "long" });

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

  const imgURL =
    day.weather[0].main == "Clouds" &&
    day.weather[0].description == "few clouds"
      ? `CloudsDay`
      : clouds.includes(day.weather[0].description) && day.clouds.all > 80
      ? "scattered clouds"
      : mist.includes(day.weather[0].description)
      ? `MistDay`
      : day.weather[0].main === "Rain" && day.clouds.all > 80
      ? "Drizzle"
      : `${day.weather[0].main}Day`;
  return (
    <div className={styles.card}>
      {isLoading ? (
        <></>
      ) : (
        <>
          <h2>
            {Math.round(day.main.temp)} &#176;{typeDegrees ? "C" : "F"}
          </h2>
          <img width={80} src={`weather-icons/${imgURL}.png`} alt="" />
          <span>{weekdayName}</span>
        </>
      )}
    </div>
  );
}

export default DailyData;
