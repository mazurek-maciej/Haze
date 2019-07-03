import React, { useState } from 'react';
import styled from 'styled-components';
import { wiki } from '../../api';
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

const CitiesList = ({ citiesList, fetchCities }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel.city : false);
    fetchCities(panel.city);
  };

  return (
    <Wrapper>
      <h1>Cities list</h1>
      <ul style={{ padding: '0 16px' }}>
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '16px 8px'
                  }}
                >
                  <h4>{city.city}</h4>
                  <div style={{ padding: '8px 0' }}>
                    <span>
                      {city.parameter}: {city.value}
                      {city.unit}
                    </span>
                  </div>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {city.description ? (
                  <span>{city.description}</span>
                ) : (
                  <span>loading</span>
                )}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        ) : (
          <h3>Select country</h3>
        )}
      </ul>
    </Wrapper>
  );
};

export default CitiesList;
