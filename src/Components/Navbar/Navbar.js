import styled from 'styled-components';

export function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavbarItem href="#">Home/Dashboard</StyledNavbarItem>
      <StyledNavbarItem href="#">Random Character</StyledNavbarItem>
      <StyledNavbarItem href="#">Favorites</StyledNavbarItem>
      <StyledNavbarItem href="#">Profile</StyledNavbarItem>
    </StyledNavbar>
  );
}

//  stylings below
const StyledNavbar = styled.nav`
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  background-color: lightslategray;
`;

const StyledNavbarItem = styled.a`
  margin: 20px;
  padding: 20px;
  color: white;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    background: hsla(100, 50%, 10%, 0.4);
    transform: translateY(-20px);
    border-radius: 10px;
    transition: 0.2s ease-in-out;
  }
`;
