import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 0 8px;
  margin-top: 1.5rem;
`;
const H1 = styled.h1`
  font-size: 48px;
  font-weight: 300;
  line-height: 1.2;
  color: hsl(0, 0%, 90%);
`;
const Description = styled.span`
  font-size: 22px;
  color: hsl(0, 0%, 80%);
  span {
    color: hsl(10, 60%, 60%);
  }
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
  &:hover,
  &:active {
    background: hsl(10, 60%, 63%);
    box-shadow: 0 2px 5px hsla(190, 20%, 30%, 0.8);
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <H1>Check air condition in your country</H1>
      <Description>
        Don't know what <span>Pm2.5</span> or <span>CO</span> mean?
      </Description>
      <div>
        <Button>Find out!</Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
