import React from 'react';
import styled, { keyframes } from 'styled-components';

const anime = keyframes`
  0% {
    background: hsl(0, 0%, 94%);
  }
  100% {
    background: hsl(0, 0%, 90%);
  }
`;
const LoadingBox = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background: hsl(0, 0%, 90%);
  animation: ${anime} 1s infinite both ease-in;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingBigBox = styled.div`
  width: 80%;
  height: 260px;
  background: hsl(0, 0%, 95%);
  margin: 4px 0;
`;
const LoadingSmallBox = styled(LoadingBigBox)`
  height: 16px;
`;

const Loading = () => {
  return (
    <LoadingBox>
      <LoadingBigBox />
      <LoadingSmallBox />
      <LoadingSmallBox />
    </LoadingBox>
  );
};

export default Loading;
