import React from 'react';
import styled from 'styled-components';
import SearchInput from './search';

const Wrapper = styled.div``;

const Search = ({ handleSearchForm, inputValue, setInputValue }) => {
  return (
    <Wrapper>
      <SearchInput
        handleSearchForm={handleSearchForm}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </Wrapper>
  );
};

export default Search;
