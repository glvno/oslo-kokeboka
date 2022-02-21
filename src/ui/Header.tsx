import styled from '@emotion/styled';
import { FC } from 'react';
import Flex from './Flex';

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--background);
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Flex>
        <h1>Oslo Kokebook</h1>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
