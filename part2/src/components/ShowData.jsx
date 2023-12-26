import React, { useState } from 'react';

function ShowData({ countryToShow }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelected = countryId => {
    const country = countryToShow.find(country => country.id === countryId);
    setSelectedCountry(country);
  };

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
