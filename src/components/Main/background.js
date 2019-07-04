import styled from 'styled-components';
import bgCurve from '../../utils/images/curve.svg';

//// Background with wave
export const Background = styled.div`
  width: 100%;
  height: 60vh;
  position: absolute;
  z-index: -1;
  background: rgb(44, 125, 131);
  background: linear-gradient(
    0deg,
    rgba(44, 125, 131, 1) 0%,
    rgba(56, 92, 117, 1) 100%
  );
`;
export const BackgroundCurve = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  background: url(${bgCurve});
  background-size: cover;
`;
////
