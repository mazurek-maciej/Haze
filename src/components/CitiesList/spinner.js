import React from 'react';
import styled, {keyframes} from 'styled-components';

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.1
  }
  100% {
    transform: rotate(360deg);
    opacity: 1
  }
`;
const Wrapper = styled.div`
  margin-top: 1.4rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Span = styled.span`
  font-size: 1.2rem;
  color: hsl(190, 50%, 85%);
  padding-top: 8px;
`;

const SpiningBlock = styled.div`
  animation: ${Spin} 2s linear infinite;
  padding: 1rem;
  border-radius: 50%;
  position: relative;
  ::before {
    border: solid 3px hsl(0, 0%, 100%);
    border-bottom-color: hsl(10, 60%, 60%);
    border-top-color: hsl(10, 60%, 60%);;
    border-radius: 50%;
    content: '';
    padding: 1rem;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

const Spinner = () => (
  <Wrapper>
    <Span>Gathering cities</Span>
    <SpiningBlock/>
  </Wrapper>
);
export default Spinner;