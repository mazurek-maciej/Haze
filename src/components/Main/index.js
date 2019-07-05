import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { openaq, wiki, reduceCountry, DATE } from '../../api';
import Search from '../Search';
import CitiesList from '../CitiesList';
import Hero from '../Hero';
import Footer from '../Footer';
import { Background, BackgroundCurve } from './background';
import { findIndex } from 'lodash';

const anime = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  animation: ${anime} 0.4s both;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;

function App() {
  const [cities, setCities] = useState(null);
  const [inputError, setInputError] = useState(false);

  const fetchOpenAQCities = async (value, param = 'pm25') => {
    setInputError(false);
    let country = reduceCountry(value, setInputError);
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
    const test = await cities
      .filter(item => item.city === city)
      .map(item => ({
        ...item,
        description: wikiCity[0].extract,
        url: wikiCity[0].fullurl,
        thumbnail: wikiCity[0].thumbnail
      }))
      .map(item => item);
    const cityIndex = await findIndex(cities, { city: test[0].city });
    await cities.splice(cityIndex, 1, test[0]);
    await setCities([...cities]);
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
        <Search error={inputError} handleSearchForm={handleSearchForm} />
        <CitiesList citiesList={cities} fetchWikiData={fetchWikiData} />
      </Wrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
