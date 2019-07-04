import React, { useState } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import RenderCityDescription from './renderCity';
import Loading from './loading';
import { media } from '../../utils/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const Description = styled.p`
  color: hsl(190, 50%, 85%);
  text-align: center;
  font-size: 18px;
`;
const AccordinTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 4px;
  ${media.phone`
    padding: 4px;
  `}
`;
const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(190, 30%, 15%);
  ${media.phone`
    font-size: 1.2rem;
  `}
`;
const Paramter = styled.span`
  font-size: 1.2rem;
  color: ${props => (props.value ? 'hsl(0, 60%, 50%)' : 'hsl(190, 30%, 25%)')};
  ${media.phone`
    font-size: 1rem;
  `}
`;

const CitiesList = ({ citiesList, fetchWikiData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = city => (event, isExpanded) => {
    setExpanded(isExpanded ? city.city : false);
    fetchWikiData(city.city);
  };
  return (
    <Wrapper>
      <ul style={{ padding: '16px 16px' }}>
        {citiesList ? (
          citiesList.map(city => (
            <React.Fragment key={city.city}>
              <ExpansionPanel
                style={{ marginBottom: '16px' }}
                expanded={expanded === city.city}
                onChange={handleChange(city)}
              >
                <ExpansionPanelSummary
                  expandIcon={<i className="material-icons">expand_more</i>}
                >
                  <AccordinTopWrapper>
                    <H4>{city.city}</H4>
                    <div style={{ padding: '8px 0' }}>
                      <Paramter>{city.parameter.toUpperCase()}: </Paramter>
                      <Paramter value>
                        {Math.round(city.value)}
                        {city.unit}
                      </Paramter>
                    </div>
                  </AccordinTopWrapper>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {city.description ? (
                    <RenderCityDescription city={city} />
                  ) : (
                    <Loading />
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </React.Fragment>
          ))
        ) : (
          <Description>Select country and parameter</Description>
        )}
      </ul>
    </Wrapper>
  );
};

export default CitiesList;
