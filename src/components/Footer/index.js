import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: flex-end;
  margin-top: auto;
  margin-right: 8px;
  text-align: center;
`;
const LinkTo = styled.a`
  color: hsl(10, 60%, 60%);
  text-decoration: none;
  text-shadow: none;
`;

const Footer = () => {
  return (
    <Wrapper>
      Data provided from{' '}
      <LinkTo target="_blank" href="https://api.openaq.org">
        OpenAQ
      </LinkTo>{' '}
      and{' '}
      <LinkTo target="_blank" href="https://www.mediawiki.org/wiki/API:Query">
        Wikipedia
      </LinkTo>
    </Wrapper>
  );
};

export default Footer;
