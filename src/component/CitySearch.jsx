import React, { useState } from "react";

export default function CitySearch({ onSearchCity }) {
  const [cityName, setCityName] = useState("");

  const triggerSearch = () => {
    onSearchCity(cityName);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Enter city name"
        style={{ padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: 10,
          marginLeft: 5,
          borderRadius: 5,
          border: "none",
        }}
        onClick={triggerSearch}
      >
        Search
      </button>
    </div>
  );
}
