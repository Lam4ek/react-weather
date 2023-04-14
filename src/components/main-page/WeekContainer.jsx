import React from "react";
import DailyData from "./DailyData";
import AppContext from "../../context";
import styles from "./DailyData.module.css";
function WeekContainer() {
  const { weatherInfo } = React.useContext(AppContext);
  if (weatherInfo.list !== undefined) {
    var dailyData = weatherInfo.list.filter((reading) =>
      reading.dt_txt.includes("12:00:00")
    );
    dailyData.splice(-1, 1);
  }

  return (
    <div className={styles.weekWeather}>
      {dailyData !== undefined
        ? dailyData.map((day, index) => <DailyData day={day} key={index} />)
        : ""}
    </div>
  );
}

export default WeekContainer;
