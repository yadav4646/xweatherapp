import React, { useState, useEffect } from "react";
import "./App.css";
import CitySearch from "./component/CitySearch";
import WeatherInfoCard from "./component/WeatherInfoCard";
import axios from "axios";

function WeatherApp() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCitySearch = (cityName) => {
    setSelectedCity(cityName);
  };

  const WeatherDetails = ({ selectedCity }) => {
    const [weatherDetails, setWeatherDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (selectedCity) {
        setIsLoading(true);
        setWeatherDetails(null);

        axios
          .get(`https://api.weatherapi.com/v1/current.json`, {
            params: {
              key: "1cdcd27cb59e457aaac93539243112",
              q: selectedCity,
            },
          })
          .then((response) => {
            setWeatherDetails(response.data);
          })
          .catch((error) => {
            console.error("Error retrieving weather information:", error);
            alert("Failed to fetch weather data");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }, [selectedCity]);

    return (
      <div style={{ marginTop: 10 }}>
        {isLoading && <p>Loading data...</p>}
        {!isLoading && weatherDetails && (
          <div className="weather-cards" style={{ display: "flex" }}>
            <WeatherInfoCard
              label="Temperature"
              value={`${weatherDetails.current.temp_c}°C`}
            />
            <WeatherInfoCard
              label="Humidity"
              value={`${weatherDetails.current.humidity}%`}
            />
            <WeatherInfoCard
              label="Condition"
              value={weatherDetails.current.condition.text}
            />
            <WeatherInfoCard
              label="Wind Speed"
              value={`${weatherDetails.current.wind_kph} kph`}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f8ff",
      }}
    >
      <CitySearch onSearchCity={handleCitySearch} />
      <WeatherDetails selectedCity={selectedCity} />
    </div>
  );
}

export default WeatherApp;
