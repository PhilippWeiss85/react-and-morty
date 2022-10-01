import styled from 'styled-components';

export function Header() {
  return <StyledHeader>React and Morty</StyledHeader>;
}

// stylings below
const StyledHeader = styled.header`
  background-color: lightslategrey;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  font-size: 2rem;
  color: white;
  border-bottom: 10px solid black;
`;
