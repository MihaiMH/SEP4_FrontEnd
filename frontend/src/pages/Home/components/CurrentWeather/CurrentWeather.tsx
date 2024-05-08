import "./CurrentWeather.css";
import * as WiIcon from "react-icons/wi";
import COLORS from "../../../../utils/COLORS";
import CurrentWeather from "../../../../models/CurrentWeather";
import { useState } from "react";
import ImmediateUpdateButton from "../../../../components/ImmediateUpdateButton/ImmediateUpdateButton";

function CurrentWeatherComponent({
  currentWeather,
  isCurrentWeatherRequested,
  setIsCurrentWeatherRequested
}: {
  currentWeather: CurrentWeather;
  isCurrentWeatherRequested: boolean;
  setIsCurrentWeatherRequested: (value: boolean) => void;
}) {
  

  return (
    <div className="current-weather d-flex flex-column justify-content-between align-items-center">
      <div className="general-data d-flex flex-column justify-content-center align-items-center">
        <h2>{currentWeather.location}</h2>
        <h3 className="my-3">{currentWeather.currentTemperature}°</h3>
        <h5>{currentWeather.currentWeather}</h5>
      </div>
      <div className="weather-icon-container">
        <WiIcon.WiDayCloudy
          color={COLORS.secondary}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="details-data d-flex flex-row justify-content-between">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <label>{currentWeather.timeChecked}</label>
          <ImmediateUpdateButton
            isCurrentWeatherRequested={isCurrentWeatherRequested}
            setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherComponent;
