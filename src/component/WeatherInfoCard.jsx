import React from "react";

export default function WeatherInfoCard({ label, value }) {
  return (
    <div className="weather-card">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}
