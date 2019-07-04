import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  padding: 16px;
  max-width: 300px;
  border-radius: 8px;
  background: hsl(190, 15%, 95%);
  opacity: ${props => (props.active ? 1 : 0)};
  transform: ${props =>
    props.active ? 'translateX(0)' : 'translateX(-300px)'};
  transition: opacity, transform, 0.5s ease-out;
  box-shadow: 0 0 15px hsla(190, 15%, 50%, 0.8);
  will-change: opacity, transform;
`;
const Parameter = styled.span`
  color: hsl(10, 60%, 60%);
  font-weight: 600;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.span`
  font-size: 14px;
  color: ${props =>
    props.openaq ? 'hsl(10, 60%, 60%)' : 'hsl(190, 15%, 40%)'};
`;
const HideButton = styled.button`
  display: flex;
  justify-content: center;
  color: hsl(190, 15%, 40%);
  padding: 4px;
  margin: 0;
  border: 0;
  margin-left: auto;
`;
const ALink = styled.a`
  color: rgb(73, 106, 144);
  text-decoration: none;
  text-shadow: none;
`;

const LegendPopUp = ({ setActive, active }) => {
  return (
    <Wrapper active={active}>
      <TitleWrapper>
        <span style={{ color: 'hsl(190, 15%, 20%)', fontWeight: '600' }}>
          Legend
        </span>
        <HideButton onClick={() => setActive(false)}>
          <i className="material-icons">close</i>
        </HideButton>
      </TitleWrapper>
      <ul style={{ borderBottom: '1px solid hsl(190, 5%, 80%)' }}>
        <li>
          <Parameter>PM2.5 </Parameter>
          <Description>
            – Atmospheric aerosol particles are microscopic solid or liquid
            matter suspended in the atmosphere of Earth. Atmospheric aerosols
            affect the climate of the earth by changing the amount of incoming
            solar radiation and outgoing terrestrial longwave radiation retained
            in the earth's system. This occurs through several distinct
            mechanisms which are split into direct, indirect and semi-direct
            aerosol effects.
          </Description>
        </li>
        <li>
          <Parameter>CO </Parameter>
          <Description>
            – Carbon monoxide poisoning is the most common type of fatal air
            poisoning in many countries. Carbon monoxide is colorless, odorless,
            and tasteless, but highly toxic. It combines with hemoglobin to
            produce carboxyhemoglobin, which usurps the space in hemoglobin that
            normally carries oxygen, but is ineffective for delivering oxygen to
            bodily tissues.
          </Description>
        </li>
        <li>
          <Parameter>NO2 </Parameter>
          <Description>
            – Nitrogen dioxide is introduced into the environment by natural
            causes, including entry from the stratosphere, bacterial
            respiration, volcanos, and lightning. These sources make NO 2 a
            trace gas in the atmosphere of Earth, where it plays a role in
            absorbing sunlight and regulating the chemistry of the troposphere,
            especially in determining ozone concentrations.
          </Description>
        </li>
      </ul>
      <Description openaq>
        Don't forget to check{' '}
        <ALink href="https://openaq.org" target="_blank">
          OpenAQ
        </ALink>{' '}
        site!
      </Description>
    </Wrapper>
  );
};

export default LegendPopUp;
