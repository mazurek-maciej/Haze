import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';
import LegendPopUp from '../LegendPopUp';

const Wrapper = styled.header`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 0 16px;
  margin-top: 1.5rem;
  ${media.phone`
    margin-bottom: 1rem;
  `}
`;
const H1 = styled.h1`
  font-size: 48px;
  font-weight: 300;
  line-height: 1.2;
  color: hsl(190, 50%, 90%);
  ${media.phone`
    font-size: 42px;
  `}
`;
const Description = styled.span`
  font-size: 22px;
  color: hsl(190, 50%, 85%);
  span {
    color: hsl(10, 60%, 60%);
  }
  ${media.phone`
    font-size: 18px;
  `}
`;
const Button = styled.button`
  padding: 6px 20px;
  border-radius: 8px;
  background: hsl(10, 60%, 60%);
  color: #fff;
  font-size: 18px;
  border: 1px solid hsl(190, 0%, 80%);
  box-shadow: 0 2px 12px hsla(190, 20%, 30%, 1);
  margin: 8px 8px;
  transition: background 0.2s;
  will-change: background, box-shadow;
  position: relative;
  &:hover,
  &:active {
    background: hsl(10, 60%, 63%);
    box-shadow: 0 2px 5px hsla(190, 20%, 30%, 0.8);
  }
  ${media.phone`
    padding: 4px 14px;
  `}
`;

const Hero = () => {
  const [activeLegend, setActiveLegend] = useState(false);
  return (
    <Wrapper>
      <H1>Check air condition in your country</H1>
      <Description>
        Don't know what <span>Pm2.5</span> or <span>CO</span> mean?
      </Description>
      <div>
        <Button onClick={() => setActiveLegend(!activeLegend)}>
          Find out!
        </Button>
        <LegendPopUp setActive={setActiveLegend} active={activeLegend} />
      </div>
    </Wrapper>
  );
};

export default Hero;
