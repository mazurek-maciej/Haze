import React, { useState } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const Description = styled.p`
  color: hsl(190, 30%, 80%);
  text-align: center;
  font-size: 18px;
`;
const AccordinTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 4px;
`;
const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(190, 30%, 15%);
`;
const Paramter = styled.span`
  font-size: 1.2rem;
  color: hsl(190, 30%, 25%);
`;
const Value = styled(Paramter)`
  color: hsl(0, 60%, 50%);
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
            <ExpansionPanel
              key={city.city}
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
                    <Paramter>{city.parameter}: </Paramter>
                    <Value>
                      {Math.round(city.value)}
                      {city.unit}
                    </Value>
                  </div>
                </AccordinTopWrapper>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {city.description ? (
                  <span>{city.description.slice(0, 300)}...</span>
                ) : (
                  // TODO:
                  <span>loading</span>
                )}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        ) : (
          <Description>Select country and parameter</Description>
        )}
      </ul>
    </Wrapper>
  );
};

export default CitiesList;
