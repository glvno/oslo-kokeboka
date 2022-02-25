import Header from './Header';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';

const StyledNav = styled.nav`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 114%;
  padding-right: 100px;
  display: flex;
  /* or 34px */

  letter-spacing: 0.02em;
  text-transform: uppercase;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  text-shadow: -1px 1px 0px #14000f;
  text-transform: uppercase;
`;

const NavHeader = ({ title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledNav>
      <button onClick={() => setIsActive(!isActive)}>{title.toUpperCase()} ▾</button>
      <div
        style={{
          display: isActive ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginRight: '20px',
        }}
      >
        <Link to="/your-recipe">Your Recipe</Link>
        <Link to="/recipes">Oslo Recipes</Link>
        <Link to="/about">About</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </StyledNav>
  );
};

export default NavHeader;
