import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import Flex from './Flex';

const StyledHeader = styled.header`
  width: 100%;
  height: 30px;
  background-color: var(--darkest-wine);
  font-weight: 600;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  padding-top: 25px;
  padding-left: 25px;
  /* or 34px */

  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

const StyledNav = styled.nav`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  display: flex;
  /* or 34px */

  letter-spacing: 0.02em;
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;

  text-shadow: -1px 1px 0px #14000f;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const StyledDiv = styled.div`
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  background: linear-gradient(var(--darkest-wine), var(--dark-wine));
  // border: solid var(--salmon);
  border-width: 0px 0.1px 0.5px 1px;
  padding: 5px;
  // box-shadow: -10px 10px 15px var(--darkest-wine);
  a {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    &:hover {
      background: var(--salmon);
      color: var(--darkest-wine);
    }
  }
`;

const StyledLink = styled(Link)`
  border: 0.5px var(--salmon) solid;
  padding: 5px;
  background: var(--dark-wine);
`;

const Header: FC<{ title: string }> = ({ title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Flex width="100%" direction="column" align="stretch">
      <StyledHeader>Oslo Kokeboka</StyledHeader>

      <StyledNav>
        <button onClick={() => setIsActive(!isActive)}>{title.toUpperCase()} ▾</button>
        <StyledDiv style={{ display: isActive ? 'flex' : 'none' }}>
          <StyledLink to="/your-recipe">Your Recipe</StyledLink>
          <StyledLink to="/recipes">Oslo Recipes</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/admin">Admin</StyledLink>
        </StyledDiv>
      </StyledNav>
    </Flex>
  );
};

export default Header;
