import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: var(--background);
  color: var(--text);
  // display: flex;
  display: none;
  justify-content: space-around;
`;

export const Nav: FC = ({ pageTitle }) => {
  return (
    <StyledNav>
      <Link to="/your-recipe">Your Recipe</Link>
      <Link to="/recipes">Oslo Recipes</Link>
      <Link to="/about">About</Link>
      <Link to="/admin">Admin</Link>
    </StyledNav>
  );
};
