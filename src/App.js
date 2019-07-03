import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import CitiesList from './components/CitiesList';
import { openaq, wiki } from './api';
import createTypography from '@material-ui/core/styles/createTypography';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function App() {
  const [cities, setCities] = useState(null);

  const fetchPollution = async (value, param = 'pm25') => {
    let country;
    switch (value) {
      case 'Poland': {
        country = 'PL';
        break;
      }
      case 'France': {
        country = 'FR';
        break;
      }
      case 'Spain': {
        country = 'ES';
        break;
      }
      case 'Germany': {
        country = 'DE';
        break;
      }
      default: {
        country = 'PL';
      }
    }
    const res = await openaq(
      `?country=${country}&parameter=${param}&order_by=value&sort=desc&limit=100`
    );
    const results = await res.data.results;
    handleUniqueCities(results);
  };

  const handleUniqueCities = async dirtyCities => {
    const uniqueCities = await dirtyCities
      .map(city => city['city'])
      .map((city, i, arr) => arr.indexOf(city) === i && i)
      .filter(city => dirtyCities[city])
      .map(city => dirtyCities[city])
      .splice(0, 10);
    setCities(uniqueCities);
  };

  const fetchCities = async city => {
    const res = await wiki(
      `api.php?format=json&action=query&prop=extracts|info|pageimages&redirects=1&explaintext=&exintro&pithumbsize=600&inprop=url&titles=${city}`
    );
    const data = await res.data.query.pages;
    const wikiCity = await Object.values(data);
    const updatedCity = await cities.filter(item => {
      if (item.city === city) {
        item['description'] = wikiCity[0].extract;
      }
      return item;
    });
    setCities([...cities, updatedCity]);
  };

  const handleSearchForm = input => {
    fetchPollution(input);
  };
  return (
    <AppWrapper>
      <Search handleSearchForm={handleSearchForm} />
      <CitiesList citiesList={cities} fetchCities={fetchCities} />
    </AppWrapper>
  );
}

export default App;
