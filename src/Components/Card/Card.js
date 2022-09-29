import styled from 'styled-components';

export function Card() {
  return (
    <StyledCard>
      <img alt="Character" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"></img>
      <h2>Morty Smith</h2>
      <button>Show more</button>
    </StyledCard>
  );
}

// stylings below
const StyledCard = styled.section`
  border: 1px solid black;
  width: 15%;
  height: 15%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 20px;

  .h2 {
    text-align: center;
  }

  .img {
    display: flex;
  }
`;
