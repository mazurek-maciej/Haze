import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 4px;
  box-shadow: inset 0 2px 15px hsla(190, 20%, 70%, 0.4);
`;
const Description = styled.span`
  color: hsl(190, 10%, 40%);
`;
const LinkToWiki = styled.a`
  text-decoration: none;
  text-shadow: none;
  color: hsl(240, 60%, 60%);
`;
const Img = styled.img`
  max-height: 300px;
`;

const RenderCity = ({ city }) => {
  if (city.thumbnail)
    return (
      <Wrapper>
        <Img src={city.thumbnail.source} alt={city.city} />
        <Description>
          {city.description.slice(0, 300)}...
          <LinkToWiki target="_blank" href={city.url}>
            Read more
          </LinkToWiki>
        </Description>
      </Wrapper>
    );
};

export default RenderCity;
