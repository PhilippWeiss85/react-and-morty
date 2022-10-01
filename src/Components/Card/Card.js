import styled from 'styled-components';

export function Card({ id, name, image, toggleFunction, toggleButton }) {
  return (
    <StyledCard>
      <img alt="CharacterImage" src={image}></img>
      <StyledH2>{name}</StyledH2>
      <StyledButton onClick={() => toggleFunction(id)}>
        {toggleButton === false ? 'Show More' : 'Show Less'}
      </StyledButton>
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
