import React from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { useRef, useState } from "react";
import styles from "./LocationInput.module.css";
import AppContext from "../../../context";

function LocationInput() {
  const { weatherInfo, setLocation, gettingWeather } =
    React.useContext(AppContext);
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(e) {
    if (e.target.value == "" || weatherInfo.message !== 0) {
      setLocation("Kiev");
    } else {
      setLocation(e.target.value);
    }
  }

  const inputRef = useRef();

  const [libraries] = useState(["places"]);

  const handlePlaceChanged = (e) => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setLocation(place.name);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={styles.locationForm}>
        <div>
          <img width={32} height={44} src="img/location-icon.png" alt="icon" />
          <LoadScript
            googleMapsApiKey={"AIzaSyA23Ql17QwSMaH7ROhTo8_Eyupjquy5AO4"}
            libraries={libraries}
          >
            <StandaloneSearchBox
              onLoad={(ref) => (inputRef.current = ref)}
              onPlacesChanged={handlePlaceChanged}
            >
              <input
                onChange={(e) => handleInputChange(e)}
                type="text"
                className="form-control"
                placeholder="Enter Location"
              />
            </StandaloneSearchBox>
          </LoadScript>
        </div>

        <button
          className={styles.btn}
          onClick={() => {
            gettingWeather();
          }}
        >
          +
        </button>
      </form>
    </>
  );
}

export default LocationInput;
