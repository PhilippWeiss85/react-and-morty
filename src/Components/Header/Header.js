import styled from 'styled-components';

export function Header() {
  return <StyledHeader>React and Morty</StyledHeader>;
}

// stylings below
const StyledHeader = styled.header`
  background-color: lightslategrey;
  margin: 0 auto;
  padding-top: 20px;
  text-align: center;
  font-size: 2rem;
  color: white;
`;
