import React, { useState } from 'react';

const Search = ({ handleSearchForm }) => {
  const [inputValue, setInputValue] = useState('');
  const handleForm = e => {
    e.preventDefault();
    handleSearchForm(inputValue);
  };
  return (
    <form onSubmit={handleForm}>
      <input
        placeholder="Miasto"
        autoComplete="off"
        list="countires"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <datalist id="countires">
        <option value="Poland" />
        <option value="Spain" />
        <option value="France" />
        <option value="Germany" />
      </datalist>
      <input type="submit" placeholder="search" />
    </form>
  );
};

export default Search;
