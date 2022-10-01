import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavbarItem to="/home" end>
        Home
      </StyledNavbarItem>
      <StyledNavbarItem to="/characters" end>
        Random Character
      </StyledNavbarItem>
      <StyledNavbarItem to="/" end>
        Favorites
      </StyledNavbarItem>
    </StyledNavbar>
  );
}

//  stylings below
const StyledNavbar = styled.nav`
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: space-around;
  background-color: lightslategray;
`;

const StyledNavbarItem = styled(NavLink)`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  color: white;
  text-decoration: none;
  border-left: 2px solid black;
  border-radius: 10px;
  border-right: 2px solid black;

  &:hover {
    background: hsla(100, 50%, 10%, 0.4);
    transform: translateY(10px);
    border-radius: 10px;
    transition: 0.15s ease-in;
  }

  &.active {
    background: hsla(100, 50%, 10%, 0.4);
    transform: translateY(10px);
    transition: 0.15s ease-in;
    font-weight: bold;
    border-bottom: 3px solid red;
  }
`;
