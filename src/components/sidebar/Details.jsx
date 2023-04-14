import React from "react";
import styles from "./Sidebar.module.css";

function Details({ showInfo, weatherInfo, typeDegrees }) {
  return showInfo ? (
    <div className={styles.sidebarDetails}>
      <div className={styles.detailsInfo1}>
        <div>
          <span>
            <img width={25} src="img/temp.png" alt="" /> High / Low
          </span>
          <span>
            {weatherInfo.list !== undefined
              ? `${Math.round(weatherInfo.list[0].main.temp_max)}/${Math.round(
                  weatherInfo.list[0].main.temp_min
                )}`
              : 0}
            &#176;{typeDegrees ? "C" : "F"}
          </span>
        </div>
        <div>
          <span>
            <img width={25} src="img/pressure.png" alt="" /> Pressure
          </span>
          <span>
            {weatherInfo.list !== undefined
              ? `${weatherInfo.list[0].main.pressure}  hPa`
              : 0}
          </span>
        </div>
      </div>
      <div className={styles.detailsInfo2}>
        <div>
          <span>
            <img width={25} src="img/feels-like.png" alt="" /> Feels like
          </span>
          <span>
            {weatherInfo.list !== undefined
              ? Math.round(weatherInfo.list[0].main.feels_like)
              : 0}
            &#176;{typeDegrees ? "C" : "F"}
          </span>
        </div>
        <div>
          <span>
            <img width={25} src="img/visibility.png" alt="" /> Visibility
          </span>
          <span>
            {weatherInfo.list !== undefined
              ? `${weatherInfo.list[0].visibility} m`
              : 0}
          </span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Details;
