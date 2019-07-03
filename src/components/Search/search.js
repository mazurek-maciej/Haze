import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsl(200, 30%, 25%);
`;
const CountryInput = styled.input`
  width: 300px;
  height: 48px;
  padding: 8px;
  background: hsl(190, 40%, 98%);
  border-radius: 8px;
  font-size: 36px;
`;
const Button = styled.input`
  padding: 4px 16px;
  border-radius: 4px;
  background: hsl(190, 40%, 98%);
  border: 1px solid hsl(190, 0%, 80%);
  margin: 0 8px;
  background: ${props => props.active && 'hsl(10, 60%, 60%)'};
  background: ${props => props.search && 'hsl(240, 60%, 60%)'};
  color: ${props => props.search && '#fff'};
  color: ${props => props.active && '#fff'};
  transition: background 0.2s;
  will-change: background;
`;

const Search = ({ handleSearchForm }) => {
  const [country, setCountry] = useState('');
  const [param, setParam] = useState('pm25');
  const handleForm = e => {
    e.preventDefault();
    handleSearchForm(country, param);
  };
  return (
    <Form onSubmit={handleForm}>
      <div style={{ marginBottom: '16px' }}>
        <CountryInput
          placeholder="Country..."
          autoComplete="off"
          list="countires"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <datalist id="countires">
          <option value="Poland" />
          <option value="Spain" />
          <option value="France" />
          <option value="Germany" />
        </datalist>
      </div>
      <div style={{ alignSelf: 'flex-start' }}>
        <Button
          type="button"
          value="pm25"
          active={param === 'pm25' && true}
          onClick={e => setParam(e.target.value)}
        />
        <Button
          type="button"
          value="co"
          active={param === 'co' && true}
          onClick={e => setParam(e.target.value)}
        />
        <Button
          type="button"
          value="no"
          active={param === 'no' && true}
          onClick={e => setParam(e.target.value)}
        />
        <Button search type="submit" value="Search" />
      </div>
    </Form>
  );
};

export default Search;
