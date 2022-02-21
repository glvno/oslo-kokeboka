import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: var(--background);
  color: var(--text);
  display: flex;
  justify-content: space-around;
`;

export const Nav: FC = () => {
  return (
    <StyledNav>
      <div>
        <Link to="/">Your Recipe</Link>
      </div>
      <div>
        <Link to="/recipes">Oslo Recipes</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/admin">Admin</Link>
      </div>
    </StyledNav>
  );
};
