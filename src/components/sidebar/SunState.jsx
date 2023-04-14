import React from "react";
import styles from "./Sidebar.module.css";

function SunState({ weatherInfo }) {
  return (
    <div className={styles.sunState}>
      <div className={styles.sunrise}>
        <h3>Sunrise</h3>
        <div>
          <span>
            {weatherInfo.list !== undefined
              ? `${
                  new Date(weatherInfo.city.sunrise * 1000).getHours() +
                    Math.floor(weatherInfo.city.timezone / 3600) ===
                  0
                    ? "00"
                    : new Date(weatherInfo.city.sunrise * 1000).getHours() +
                        Math.floor(weatherInfo.city.timezone / 3600) >
                      24
                    ? "error"
                    : new Date(weatherInfo.city.sunrise * 1000).getHours() +
                        Math.floor(weatherInfo.city.timezone / 3600) <
                      0
                    ? `${
                        Date().slice(29, 31) > 0
                          ? 24 -
                            ((Math.floor(weatherInfo.city.timezone) / 3600 < 0
                              ? Math.floor(weatherInfo.city.timezone / 3600) *
                                -1
                              : Math.floor(weatherInfo.city.timezone / 3600)) -
                              new Date(
                                weatherInfo.city.sunrise * 1000
                              ).getHours()) -
                            Date().slice(29, 31)
                          : 24 -
                            ((Math.floor(weatherInfo.city.timezone / 3600) < 0
                              ? Math.floor(weatherInfo.city.timezone / 3600) *
                                -1
                              : Math.floor(weatherInfo.city.timezone / 3600)) -
                              new Date(
                                weatherInfo.city.sunrise * 1000
                              ).getHours()) +
                            Date().slice(29, 31) * -1
                      }`
                    : new Date(weatherInfo.city.sunrise * 1000).getHours() > 10
                    ? `${
                        Date().slice(29, 31) > 0
                          ? new Date(
                              weatherInfo.city.sunrise * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) -
                            Date().slice(29, 31)
                          : new Date(
                              weatherInfo.city.sunrise * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) +
                            Date().slice(29, 31) * -1
                      }`
                    : `0${
                        Date().slice(29, 31) > 0
                          ? new Date(
                              weatherInfo.city.sunrise * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) -
                            Date().slice(29, 31)
                          : new Date(
                              weatherInfo.city.sunrise * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) +
                            Date().slice(29, 31) * -1
                      }`
                }:${
                  new Date(weatherInfo.city.sunrise * 1000).getMinutes() > 10
                    ? `${new Date(
                        weatherInfo.city.sunrise * 1000
                      ).getMinutes()}`
                    : `0${new Date(
                        weatherInfo.city.sunrise * 1000
                      ).getMinutes()}`
                }`
              : ""}
          </span>
          <img src="img/sun-state.png" alt="" />
        </div>
      </div>
      <div className={styles.sunset}>
        <h3>Sunset</h3>
        <div>
          <span>
            {weatherInfo.list !== undefined
              ? `${
                  new Date(weatherInfo.city.sunset * 1000).getHours() +
                    Math.floor(weatherInfo.city.timezone / 3600) ===
                  0
                    ? "00"
                    : new Date(weatherInfo.city.sunrise * 1000).getHours() +
                        Math.floor(weatherInfo.city.timezone / 3600) >
                      24
                    ? "error"
                    : new Date(weatherInfo.city.sunset * 1000).getHours() +
                        Math.floor(weatherInfo.city.timezone / 3600) <
                      0
                    ? `${
                        Date().slice(29, 31) > 0
                          ? 24 -
                            ((Math.floor(weatherInfo.city.timezone / 3600) < 0
                              ? Math.floor(weatherInfo.city.timezone / 3600) *
                                -1
                              : Math.floor(weatherInfo.city.timezone / 3600)) -
                              new Date(
                                weatherInfo.city.sunset * 1000
                              ).getHours()) -
                            Date().slice(29, 31)
                          : 24 -
                            ((Math.floor(weatherInfo.city.timezone / 3600) < 0
                              ? Math.floor(weatherInfo.city.timezone / 3600) *
                                -1
                              : Math.floor(weatherInfo.city.timezone / 3600)) -
                              new Date(
                                weatherInfo.city.sunset * 1000
                              ).getHours()) +
                            Date().slice(29, 31) * -1
                      }`
                    : new Date(weatherInfo.city.sunset * 1000).getHours() +
                        Math.floor(weatherInfo.city.timezone / 3600) >
                      10
                    ? `${
                        Date().slice(29, 31) > 0
                          ? new Date(
                              weatherInfo.city.sunset * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) -
                            Date().slice(29, 31)
                          : new Date(
                              weatherInfo.city.sunset * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) +
                            Date().slice(29, 31) * -1
                      }`
                    : `0${
                        Date().slice(29, 31) > 0
                          ? new Date(
                              weatherInfo.city.sunset * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) -
                            Date().slice(29, 31)
                          : new Date(
                              weatherInfo.city.sunset * 1000
                            ).getHours() +
                            Math.floor(weatherInfo.city.timezone / 3600) +
                            Date().slice(29, 31) * -1
                      }`
                }:${
                  new Date(weatherInfo.city.sunset * 1000).getMinutes() > 10
                    ? `${new Date(weatherInfo.city.sunset * 1000).getMinutes()}`
                    : `0${new Date(
                        weatherInfo.city.sunset * 1000
                      ).getMinutes()}`
                }`
              : ""}
          </span>
          <img src="img/sun-state.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SunState;
