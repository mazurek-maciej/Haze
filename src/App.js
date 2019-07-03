import React, { useState } from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import CitiesList from './components/CitiesList';
import Hero from './components/Hero';
import { openaq, wiki, DATE } from './api';
import bgCurve from './utils/images/background-curve.svg';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;
const Background = styled.div`
  width: 100%;
  height: 60vh;
  position: absolute;
  z-index: -1;
  background: rgb(44, 125, 131);
  background: linear-gradient(
    0deg,
    rgba(44, 125, 131, 1) 0%,
    rgba(56, 92, 117, 1) 100%
  );
`;
const BackgroundCurve = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 0;
  background: url(${bgCurve});
  background-size: cover;
`;

function App() {
  const [cities, setCities] = useState(null);

  const fetchOpenAQCities = async (value, param = 'pm25') => {
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
      `?country=${country}&parameter=${param}&order_by=value&sort=desc&date_from=${DATE}`
    );
    const citiesData = await res.data.results;
    handleFilterCities(citiesData);
  };

  const handleFilterCities = async unfilteredCities => {
    const filteredCities = await unfilteredCities
      .map(city => city['city'])
      .map((city, i, arr) => arr.indexOf(city) === i && i)
      .filter(city => unfilteredCities[city])
      .map(city => unfilteredCities[city])
      .splice(0, 10);
    setCities(filteredCities);
  };

  const fetchWikiData = async city => {
    const res = await wiki(
      `api.php?format=json&action=query&prop=extracts|info|pageimages&redirects=1&explaintext=&exintro&pithumbsize=600&inprop=url&titles=${city}`
    );
    const data = await res.data.query.pages;
    const wikiCity = await Object.values(data);
    const updateCity = await cities.filter(item => {
      if (item.city === city) {
        item['description'] = wikiCity[0].extract;
      }
      return item;
    });
    setCities([...cities, updateCity]);
  };

  const handleSearchForm = (country, param) => {
    fetchOpenAQCities(country, param);
  };
  return (
    <AppWrapper>
      <Background>
        <BackgroundCurve />
      </Background>
      <Wrapper>
        <Hero />
        <Search handleSearchForm={handleSearchForm} />
        <CitiesList citiesList={cities} fetchWikiData={fetchWikiData} />
      </Wrapper>
    </AppWrapper>
  );
}

export default App;
