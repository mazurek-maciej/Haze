import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import RenderCityDescription from './renderCity';
import Loading from './loading';
import Spinner from "./spinner";
import { media } from '../../utils/media';

const appear = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-50px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;
const Panel = styled(ExpansionPanel)`
  animation: ${appear} 0.4s both;
  animation-delay: ${props => `0.${props.delay + 1}s`};
`;

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

const CitiesList = ({ citiesList, fetchWikiData, isLoading }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = city => (event, isExpanded) => {
    setExpanded(isExpanded ? city.city : false);
    fetchWikiData(city.city);
  };
  return (
    <Wrapper>
      <Description>Select country and parameter</Description>
      {isLoading ? <Spinner/> : citiesList ? (
        <ul style={{ padding: '16px 16px', overflow: 'hidden' }}>
          {citiesList.map((city, i) => (
              <React.Fragment key={city.city}>
                <Panel
                  style={{ marginBottom: '16px' }}
                  expanded={expanded === city.city}
                  onChange={handleChange(city)}
                  delay={i}
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
                </Panel>
              </React.Fragment>
            ))}
        </ul>
      ) : null}
    </Wrapper>
  );
};

export default CitiesList;
