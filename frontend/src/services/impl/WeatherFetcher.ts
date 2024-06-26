// weatherFetcher.js

import WeatherService from "../Interfaces/WeatherService";
import WeatherHttpService from "./WeatherHttpService";

const service: WeatherService = new WeatherHttpService();

const weatherFetcher = {
  async initCurrentWeatherFetch() {
    const c = await service.fetchCurrentWeather();
    localStorage.setItem("current_weather", JSON.stringify(c));
    console.log(
      `Init weather data fetched: ${new Date().toLocaleTimeString()}`
    );
    return c;
  },
  fetchCurrentWeatherPeriodicaly() {
    const fetchCurrentWeather = () => {
      const minutes = new Date().getMinutes();
      if (minutes === 30 || minutes === 0) {
        service.fetchCurrentWeather().then((c) => {
          localStorage.setItem("current_weather", JSON.stringify(c));
          console.log(
            `Current weather data fetched: ${new Date().toLocaleTimeString()}`
          );
        });
      }
    };

    const fetchCurrentWeatherInterval = setInterval(
      fetchCurrentWeather,
      60 * 1000
    );

    return () => {
      clearInterval(fetchCurrentWeatherInterval);
    };
  },
};

export default weatherFetcher;
