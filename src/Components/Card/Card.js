import styled from 'styled-components';

export function Card({ id, name, gender, status, species, image }) {
  return (
    <StyledCard>
      <img alt="CharacterImage" src={image}></img>
      <StyledH2>{name}</StyledH2>
      <StyledButton>Show more</StyledButton>
    </StyledCard>
  );
}

// stylings below
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
