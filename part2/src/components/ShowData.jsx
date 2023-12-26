import React, { useEffect, useState } from 'react';
import { getWeather } from '../api/weather'

function ShowData({ countryToShow }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleCountrySelected = countryId => {
    const country = countryToShow.find(country => country.id === countryId);
    setSelectedCountry(country);
    setWeather(null); // Reset weather data
  };

  useEffect(() => {
    if (selectedCountry) {
      getWeather(selectedCountry.capital[0])
        .then(data => {
          if (data && data.current) {
            setWeather(data.current);
          }
        });
    }
  }, [selectedCountry]);
  console.log(weather)

  if (countryToShow.length === 0) {
    return <p>No matches, specify another filter</p>;
  }
  if (countryToShow.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countryToShow.length === 1 || selectedCountry) {
    const country = selectedCountry || countryToShow[0];
    return (
      <>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital[0]}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img
          src={country.flags.png}
          alt={`flag of ${country.name.common}`}
          width='200'
        />
        {weather && (
          <div>
            <h3>Weather in {country.capital[0]}</h3>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Weather Descriptions: {weather.weather_descriptions.join(', ')}</p>
            <img src={weather.weather_icons[0]} alt="Weather Icon" />
          </div>
        )}
      </>
    );
  }

  return (
    <div>
      <h2>Countries</h2>
      {countryToShow.map(country => (
        <p key={country.id}>
          {country.name.common}
          <button onClick={() => handleCountrySelected(country.id)}>show</button>
        </p>
      ))}
    </div>
  );
}

export default ShowData;
