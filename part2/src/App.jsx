import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import FormPerson from './components/FormPerson'
import ShowData from './components/ShowData'
import { getAll } from './api/persons'
import axios from 'axios'

const App = () => {
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState('');
  const randomId = () => Math.floor(Math.random() * 100000);
  useEffect(() => {
    const promise = getAll();

    promise.then(
      response => {
        response.data.map(person => (person.id = randomId()));
        setCountry(response.data);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  const filteredData = country.filter(person =>
    person.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredData.length > 10) {
    return (
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }

  if (filteredData.length === 1) {
    return (
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        <ShowData countryToShow={filteredData} />
      </div>
    );
  }
  
  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ShowData countryToShow={filteredData} />
    </div>
  );
};
export default App