import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsl(200, 30%, 25%);
`;
const FormInput = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`
const CountryInput = styled.input`
  padding: 8px 16px;
  background: hsl(190, 40%, 98%);
  border-radius: 8px;
  font-size: 36px;
  ${media.phone`
    font-size: 24px;
  `}
`;
const Button = styled.button`
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
  ${media.phone`
    padding: 4px 8px;
  `}
`;
const Error = styled.span`
  color: #ffdbd1;
  font-weight: 600;
`;

const Search = ({ error, handleSearchForm }) => {
  const [country, setCountry] = useState('');
  const [param, setParam] = useState('pm25');
  const handleForm = e => {
    e.preventDefault();
    handleSearchForm(country, param);
  };
  return (
    <Wrapper>
      <Form onSubmit={handleForm}>
        <FormInput>
          <CountryInput
            type="text"
            placeholder="Country..."
            autoComplete="countries"
            list="countires"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          {error && <Error>You need to select correct country!</Error>}
          <datalist id="countires">
            <option value="Poland" />
            <option value="Spain" />
            <option value="France" />
            <option value="Germany" />
          </datalist>
        </FormInput>
        <ButtonsWrapper>
          <Button
            type="button"
            id="pm25"
            value="PM2.5"
            active={param === 'pm25' && true}
            onClick={e => setParam(e.target.id)}
          >
            PM2.5
          </Button>
          <Button
            type="button"
            id="co"
            value="CO"
            active={param === 'co' && true}
            onClick={e => setParam(e.target.id)}
          >
            CO
          </Button>
          <Button
            type="button"
            value="NO2"
            id="no2"
            active={param === 'no2' && true}
            onClick={e => setParam(e.target.id)}
          >
            NO2
          </Button>
          <Button search type="submit" value="Search">
            Search
          </Button>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};

export default Search;
