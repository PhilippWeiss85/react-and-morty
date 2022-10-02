import styled from 'styled-components';
import { useState } from 'react';

export function DetailCharacterPage({ id, image, name, status, species, type }) {
  const [moreInfos, setMoreInfos] = useState(true);

  function toggleInfos() {
    setMoreInfos((previousInfos) => (previousInfos = !previousInfos));
  }

  return (
    <StyledCard>
      <StyledBookmark>
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
        </svg>
      </StyledBookmark>
      <img alt="CharacterImage" src={image}></img>
      <StyledH2>{name}</StyledH2>

      {moreInfos === true && (
        <>
          <StyledH3>Status:</StyledH3>
          <StyledParagraph>{status}</StyledParagraph>
          <StyledH3>Species:</StyledH3>
          <StyledParagraph>{species}</StyledParagraph>
          <StyledH3>Type:</StyledH3>
          <StyledParagraph>{type}</StyledParagraph>
        </>
      )}
      <StyledButton onClick={toggleInfos}>{moreInfos === true ? 'Show less' : 'Show More'}</StyledButton>
    </StyledCard>
  );
}

// Stylings below
const StyledCard = styled.section`
  border: 2px solid black;
  border-radius: 5px;
  background-color: lightblue;
  width: 20%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 20px;
  box-shadow: 10px 4px 10px grey;

  .img {
    display: flex;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: white;
  height: 2rem;

  &:hover {
    background: hsla(180, 80%, 30%, 0.7);
    font-size: 1.1rem;
    transition: 0.1s ease-out;
  }
`;

const StyledH3 = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

const StyledBookmark = styled.div`
  /* margin: 0 auto; */
  margin: 0 0 0 99%;

  & svg {
    position: relative;
    bottom: 30px;

    &:hover {
      fill: blue;
    }
  }
`;
